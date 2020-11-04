from subprocess import getoutput
import re

class ConsoleColor:
  GREEN = '\033[32m'
  YELLOW = '\033[33m'
  END = '\033[0m'

print('\n')

# Check the versions written in json files.
srcVer = getoutput('npm run checkVersion')

for line in srcVer.split('\n'):
  matchResult =re.match(r'^.+\.json.*$', line)
  if (matchResult is not None and len(matchResult.group()) > 0):
    print(ConsoleColor.YELLOW + line + ConsoleColor.END)

# Display the latest git tag.
allTag = getoutput('git tag').split('\n')
print(ConsoleColor.GREEN + "Latest release: " + allTag[len(allTag) - 1] + ConsoleColor.END)

print('\n')
