#!/usr/bin/python3
"""
Contains State class and Base, an instance Base = declarative_base()
"""
from sqlalchemy import Column, Integer, String, MetaData
from sqlalchemy.ext.declarative import declarative_base

mdata = MetaData()
Base = declarative_base(metadata=mdata)


class State(Base):
    """
    Class with id and name, the attributes of each state
    """
    __tablename__ = 'states'
    id = Column(Integer, unique=True, nullable=False, primary_key=True)
    name = Column(String(128), nullable=False)
