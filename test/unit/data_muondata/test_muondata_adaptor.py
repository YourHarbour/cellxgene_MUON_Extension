import json
import time
import unittest

import numpy as np
import pandas as pd
import pytest
from parameterized import parameterized_class

import test.decode_fbs as decode_fbs
from server.common.config.app_config import AppConfig
from server.common.utils.data_locator import DataLocator
from server.common.errors import FilterError
from server.data_anndata.anndata_adaptor import AnndataAdaptor
from server.data_anndata.muon_adaptor import MuonAdaptor
from test import PROJECT_ROOT, FIXTURES_ROOT
from test.unit import muno_config
from test.fixtures.fixtures import pbmc3k_colors

"""
Test the anndata adaptor using the pbmc3k data set.
"""


@parameterized_class(
    ("data_locator", "backed", "X_approximate_distribution"),
    [
        (f"{PROJECT_ROOT}/dataset/pbmc3k_processed.h5mu", False, "auto"),
    ],
)
class AdaptorTest(unittest.TestCase):
    def setUp(self):
        self.data_file = DataLocator(f"{PROJECT_ROOT}/dataset/pbmc3k_processed.h5mu")
        config = AppConfig()
        config.update_server_config(single_dataset__datapath=self.data_file.path)
        config.update_server_config(app__flask_secret_key="secret")
        config.complete_config()
        self.data = MuonAdaptor(self.data_file, config)

    def test_init(self):
        self.assertEqual(self.data.cell_count, 2747)
        self.assertEqual(self.data.gene_count, 36601)

    def test_mandatory_annotations(self):
        obs_index_col_name = self.data.get_schema()["annotations"]["obs"]["index"]
        self.assertIn(obs_index_col_name, self.data.data.obs)
        self.assertEqual(list(self.data.data.obs.index), list(range(2747)))
        var_index_col_name = self.data.get_schema()["annotations"]["var"]["index"]
        self.assertIn(var_index_col_name, self.data.data.var)
        self.assertEqual(list(self.data.data.var.index), list(range(36601)))

    def test_layout(self):
        fbs = self.data.layout_to_fbs_matrix(fields=None)
        layout = decode_fbs.decode_matrix_FBS(fbs)
        self.assertEqual(layout["n_rows"], 2747)

    def test_annotations(self):
        fbs = self.data.annotation_to_fbs_matrix("obs")
        annotations = decode_fbs.decode_matrix_FBS(fbs)
        self.assertEqual(annotations["n_rows"], 2747)

