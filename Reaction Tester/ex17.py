#import argv from sys and exists function from os.path
from sys import argv
from os.path import exists

#arguments to use
script, from_file, to_file = argv

#print string using filenames given as arguments
print "Copying from %s to %s" % (from_file, to_file)

#set var in_file to contents of opened from_file
indata = open(from_file).read()

#print string with length of above file
print "The input file is %d bytes long" % len(indata)

#print string with answer to if to_file exists
print "Does the output file exist? %r" % exists(to_file)

#print string then user prompted for input
print "Ready, hit RETURN to continue, CTRL-C to abort."
raw_input()

#set var out_file to the opened to_file - it is writable
out_file = open(to_file, 'w')

#write the contents of the other file to out_file
out_file.write(indata)

#print string
print "Alright, all done."

#close out_file
out_file.close()
