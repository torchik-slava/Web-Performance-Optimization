The size of bundle.js from part 1 is **105** bytes.
The size of bundle for modern browsers from part 2 is **103** bytes.
The size of bundle for old browsers from part 2 is **1666** bytes.

So we can see that bundle for modern browsers is much more lightweight than for old ones.
At the same time there are no big difference in size between bundle configured via browserlist and bundle using ES modules.
Possibly if the source code size is big, it will be easier to see the difference. 