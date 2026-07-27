Notes:

July 26th, 2026
Im learning that a class can only have one animation at a time, 
or else the next one overwrites the previous one. 
So since floating is constant, its overriding the hiccup animation.


July 27th, 2026
Fixed the animation. The solution was to add a wrapper around the cell and then tying the constant floating animation to that wrapper, that way the other animations like hiccup inserted or flip can operate.