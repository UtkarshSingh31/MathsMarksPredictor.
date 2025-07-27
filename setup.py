from setuptools import find_packages,setup
from typing import List

HYPEN='-e .'
def get_packages(file_path:str)->List[str]:
    '''
    This function will return the list of requirements.
    '''

    requirements=[]
    with open(file_path) as file_obj:
        requirements=file_obj.readlines()
        requirements=[req.replace('\n','') for req in requirements]

        if HYPEN in requirements:
            requirements.remove(HYPEN)

    return requirements

setup(
    name='ml_project',
    version='0.0.1',
    author='Utkarsh',
    author_email='utkarshsingh.0902@gmail.com',
    packages=find_packages(),
    install_requires=get_packages('requirements.txt')
)