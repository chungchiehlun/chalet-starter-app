#!/bin/bash

ROOT=`pwd`
cd ./packages/create-starter-app

npm pack
rm -rf package
tar -xvzf create-starter-app-3.0.4.tgz

cd $ROOT

