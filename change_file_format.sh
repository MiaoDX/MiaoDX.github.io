#for d in $(find ./source/_posts/blogs -maxdepth 2 -type d)
for d in $(find . -maxdepth 2 -type d)
do
	#Do something, the directory is accessible with $d:
	bn=$(basename $d)

	for f in $(find $(dirname $d) -maxdepth 2 -type f -name '*.md')
	do
		f_no_suffix="${f%.*}"
		echo $f_no_suffix
		cp $f $f_no_suffix'.txt'
		# git mv $f $f_no_suffix'.txt'
		# rm $f
	done
done