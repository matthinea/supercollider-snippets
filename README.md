# supercollider-snippets package

This is a snippets package for use in SuperCollider, a programming language for audio synthesis. Feel free to submit pull requests to add snippets you find useful; just make sure to check if similar coverage doesn't already exist. 

# contributing

The snippets file is in the `snippets` directory. Right now you can just add snippets to the bottom of the `supercollider-snippets.cson` file, indented 2 spaces to that everything is still under the `.source.supercollider` key. The syntax for adding a snippet is pretty straightforward:

```
  'snippet name':
    'prefix': 'text_to_invoke_snippet'
    'body': """
      // your snippet goes here
      // take as many lines as you like
    """
```

More on snippets syntax [here](http://flight-manual.atom.io/using-atom/sections/snippets/).

Thanks to [@crucialfelix](https://github.com/crucialfelix) for the [tools](https://github.com/crucialfelix/atom-supercollider) to use Atom as a SuperCollider IDE.
