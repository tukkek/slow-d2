# Slow Diablo 2
This module for Diablo 2, Lord Of Destruction aims to make the game roughly 3 times slower while maintaining balance.

# Implementation
The key change is to make monsters have 3 times more life while reducing their damage 3 times to slow the game down considerably.

This main change requires other values to be multiplied by 3 too:
* Monster regeneration
* Armor and weapon durability; quantity and their low warnings

# Balance
Some side-effects are mostly self cancelling. For example:
* Heal-rate for potions is more effective as damage input is 3 times slower
* Repair costs are 3 times higher as maximum durability is vastly increased

My best assessment is that 90% of the original balance is preserved.

It is arguable that simply making the game slower makes it much easier. This module only aims to preserve mechanical balance.

# Credits
* Deno http://deno.com/
* Base-game files from https://github.com/Danjb1/d2-base-mod
* Blizzard North https://en.wikipedia.org/wiki/Blizzard_North

# Installation
* Get the latest release from https://github.com/tukkek/slow-d2/releases
* Extract the Data directory in your install folder such as:
  * `~/.wine/drive_c/Program Files (x86)/Diablo II/data/`
  * `C:\Program Files (x86)/Diablo II\data\`
* Run the game or modify your short-cut with the flags `Diablo II.exe -direct -txt`. The work-path should be the install folder.

# Compatibility
This module was tested with Lord Of Destruction 1.14B. For other versions these notes from D2 Base should apply broadly:
> https://github.com/Danjb1/d2-base-mod/blob/master/docs/FAQ.md#can-i-use-these-files-with-other-versions-of-the-game.

# Links
* A script to make Diablo 2 easier to play with the key-board, https://gist.github.com/tukkek/ff7e058de05dd043b8843d772824287c.
