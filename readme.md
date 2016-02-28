# Brackets HiDI Support

Simple extension that scales the Brackets editor by 200%, so that it displays correctly on HiDPI displays. This extension was inspired by https://github.com/1beb/ui-too-small.

# How it Works

Instead of trying to resize individual parts of the Brackets UI, this extension simply applies a `zoom: 2 !important` CSS rule to the UI's `body` element, since the `zoom` proprety is supported by the WebKit engine and has the same effect as zooming a page in the browser.

## Configuration

You can make your own adjustments by editing main.js in your user extension folder.

In Brackets, click: _Help_ > _Show Extensions Folder_ > Navigate to `user` directory > Navigate to `brackets-hidpi-support` > open `main.js`, review CSS, and edit as needed. Save and push F5 to reload the Brackets window to test your adjustments.

You can edit to your heart's content. We recommend changing the folder name so you avoid having your changes overwritten with future updates to the extension.

## News

* 2015-02-28 - forked and renamed to `brackets-hidpi-support`, and switched to using `zoom` to acheieve the desired effect
* 2015-05-19 - updated with lineheight fix courtesy of [Paul Wellner Bou](http://paul.wellnerbou.de/) ([github](https://github.com/paulwellnerbou))
* 2015-05-15 - updated with !importance to fix working files, also added lineheight directive for a bit more space.
