import random
import string
from os import popen

PROJECT_ROOT = popen("git rev-parse --show-toplevel").read().strip()
FIXTURES_ROOT = PROJECT_ROOT + "/test/fixtures"
H5AD_FIXTURE = FIXTURES_ROOT + "/pbmc3k-CSC-gz.h5ad"
H5MU_FIXTURE = FIXTURES_ROOT + "/pbmc3k_processed.h5mu"


def random_string(n):
    return "".join(random.choice(string.ascii_letters) for _ in range(n))
