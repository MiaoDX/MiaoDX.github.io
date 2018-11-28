#!/bin/bash

# src_encoding="GBK"
# dst_encoding="UTF-8"

src_encoding="UTF-8"
dst_encoding="GBK"

src_file_name=$1
dir_name=${src_file_name%/*}

tmp_file="${dir_name}/encoding_change_tmp"

echo "${src_file_name} $src_encoding -> $dst_encoding"

# the double quotation of `$src_file_name` make filename with blank also suitable
# temp represents success or not
temp=`iconv -c -f $src_encoding -t $dst_encoding "$src_file_name" > $tmp_file && echo 'true'`; 

if [ "$temp" = 'true' ]
then
	mv $tmp_file "$src_file_name" # override the original file
# else
# 	echo "Failed to transfer ${src_file_name}"
fi;