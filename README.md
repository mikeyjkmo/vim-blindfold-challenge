# Installation

```bash
> npm install
```

# Run tests

```bash
> npm test
```

# How to play

Look at index.js for 15 seconds. You may look at the tests for longer.

You can use this command to open the file and then automatically close it after X seconds:

```bash
> timeout 15 vim index.js
```

OR even better copy and paste this VimScript function to your .vimrc

```vimscript
" IMPORTANT only works currently on files in the CWD
" :call Peak("index.js")
" Use this function to open the file for 15 seconds then close it
" giving the player the time to cover their screen and hit ENTER 
" when the screen is fully covered...
function! Peak(file)
    execute 'edit ' . a:file
    redraw
    echom "You have 15 seconds to look at the code..."
    execute 'sleep 15'
    bd
    redraw
    echom "Are you ready to play??"
    sleep 2
    echom "Please COVER YOUR SCREEN NOW and press ENTER when you are ready..."
    sleep 2
    let l:ans = input("Press Enter to re-open the file... GOOD LUCK")
    execute 'edit ' . a:file
endfunction
```

As the above code (vimscript) says in the comments you can trigger the function by using:

```vimscript
:call Peak("filename")

:call Peak("index.js")
```

Then:

```bash
> vim index.js -w keystrokes.txt
```

Save and run the tests without looking!
