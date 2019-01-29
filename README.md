# Tips

To edit your site, your make changes in the following sections

1. **config.toml** ~ global site settings
2. **content directory** ~ All pages, articles & portfolio pages
3. **data directory** ~ edit menu


## Adding Pages

Like in Jekyll, we mostly uses [Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) to author pages and articles in Hugo.

Considering Markdown's simplicity, it's arguably pretty powerful. That said, there are situations where markdown is not enough by its own. [Hugo shortcodes](https://gohugo.io/content-management/shortcodes/) help us bridge that gap.

In this template, I have included the following shortcodes

1. button

Lets say you want to make a link a button, do the following

```markdown
{{< button link = 'url' text = 'some text' external = "true" >}}
```

If you don't specify any value for ```external``` the link will open in the same tab. If you don't specify the value for ```text``` the button's text will default to *Read More*

2. block

You may want to divide your content into sections. In that case, do the following:

  1. enable blocks in the front matter like so:
  ```yaml
  ...
  blocks: true
  ...
  ```
  2. Add as many blocks as you wish like so
  
  ```
  ...
  {{% block %}} <!-- open block -->
    ...
    markdown content
    ...
  {{% /block %}}
  ...
  ```
  blocks can take the following arguments/values

  |ARGUMENT | PURPOSE |
  |--------| ---------|
  | background | set to **mute** to make block background gray
  | fullWidth | set it to **true** if you want it to take the entire width
  | blockImage | set it to a url to give the block a background image
  | columns | specify number of columns in a block

  > Note: You will often nest **columns** in **blocks**

3. column 
Columns are wrapped inside **blocks**. Their syntax is similar to that of blocks

  ```
  ...
  {{% column %}} <!-- open block -->
    ...
    markdown content
    ...
  {{% /column %}}
  ...
  ```

4. image

Sometimes, you want to float/align an image either to right or left of a paragraph.

  #### Example

  ```markdown
  {{< image src = "path" align = "left" width = "64%" >}}
  ```
*It is advisable to use percentages % than fixed pixel values fot the **width** property*


> The pages in the content directory have used these shortcodes in several places

## Where to keep media
All static assets are stored in the **static** folder. When hugo builds the site, all the files in this folder are dumped at the root level of your site. This way, your don't include **"/static"** in the path of your assets. For example, if you have an image stored in **static/images/myImage.png**, to include that image in your page, you would:

```markdown
![some description for seo](/images/myImage.png)
```

else if you're using a shortcode, you could:

```markdown
{{< image src = "/images/myImage.png" alt = "some description for seo" >}}
```

## Hugo tutorials
[These Hugo tutorials (tutorial 1 - 9)](https://www.youtube.com/watch?v=qtIqKaDlqXo&list=PLLAZ4kZ9dFpOnyRlyS-liKL5ReHDcj4G3) could prove very useful. 