import unittest
import json

from server.common.utils.data_locator import DataLocator
from server.common.config.app_config import AppConfig
from server.data_anndata.muon_adaptor import MuonAdaptor
from test import PROJECT_ROOT


class DataLoadAdaptorTest(unittest.TestCase):
    """
    Test file loading, including deferred loading/update.
    """

    def setUp(self):
        self.data_file = DataLocator(f"{PROJECT_ROOT}/dataset/pbmc3k_processed.h5mu")
        config = AppConfig()
        config.update_server_config(single_dataset__datapath=self.data_file.path)
        config.update_server_config(app__flask_secret_key="secret")
        config.complete_config()
        self.data = MuonAdaptor(self.data_file, config)

    def test_delayed_load_data(self):
        self.data._create_schema()
        self.assertEqual(self.data.cell_count, 2747)
        self.assertEqual(self.data.gene_count, 36601)

    def test_diffexp_topN(self):
        f1 = {"filter": {"obs": {"index": [[0, 500]]}}}
        f2 = {"filter": {"obs": {"index": [[500, 1000]]}}}
        result = json.loads(self.data.diffexp_topN(f1["filter"], f2["filter"]))
        self.assertEqual(len(result["positive"]), 10)
        self.assertEqual(len(result["negative"]), 10)
        result = json.loads(self.data.diffexp_topN(f1["filter"], f2["filter"], 20))
        self.assertEqual(len(result["positive"]), 20)
        self.assertEqual(len(result["negative"]), 20)


class DataLocatorAdaptorTest(unittest.TestCase):
    """
    Test various types of data locators we expect to consume
    """

    def get_basic_config(self):
        config = AppConfig()
        config.update_server_config(
            single_dataset__obs_names=None,
            single_dataset__var_names=None,
        )
        config.update_server_config(app__flask_secret_key="secret")
        config.update_dataset_config(
            embeddings__names=["tsne"],
            presentation__max_categories=100,
            diffexp__lfc_cutoff=0.01,
        )
        return config

    def stdAsserts(self, data):
        """run these each time we load the data"""
        self.assertIsNotNone(data)
        self.assertEqual(self.data.cell_count, 2747)
        self.assertEqual(self.data.gene_count, 36586)

    def test_posix_file(self):
        data_file = DataLocator(f"{PROJECT_ROOT}/dataset/pbmc3k_processed.h5mu")
        config = AppConfig()
        config.update_server_config(single_dataset__datapath=data_file.path)
        config.update_server_config(app__flask_secret_key="secret")
        config.complete_config()
        data = MuonAdaptor(data_file, config)
        self.assertEqual(data.cell_count, 2747)
        self.assertEqual(data.gene_count, 36601)
