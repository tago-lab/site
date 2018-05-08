<template>
  <div class="header-container">
    <img src="/header.png" alt="header image">
  </div>
</template>
<style lang="stylus" scoped>
/*---------------------------------------------
* breakpoints
*---------------------------------------------*/
screen-sm = 768px
screen-md = 992px
screen-lg = 1200px

breakpoint(bpName)
    for name in bpName
        if name == 'sm'
            @media only screen and (min-width: screen-sm)
                {block}
        if name == 'md'
            @media only screen and (min-width: screen-md)
                {block}
        if name == 'lg'
            @media only screen and (min-width: screen-lg)
                {block}
        if name == 'sm-up'
            @media only screen and (max-width: screen-sm)
                {block}
        if name == 'md-up'
            @media only screen and (max-width: screen-md)
                {block}
        if name == 'lg-up'
            @media only screen and (max-width: screen-lg)
                {block}

.header-container
  +breakpoint(md-up)
    margin-right calc(50% - 50vw)
    margin-left calc(50% - 50vw)
</style>
