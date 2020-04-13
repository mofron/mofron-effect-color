# mofron-effect-color
[mofron](https://mofron.github.io/mofron/) is module based frontend framework.

color effect for mofron


# Install
```
npm install mofron mofron-effect-color
```

# Sample
```html
<require>
    <tag load="mofron-comp-frame">Frame</tag>
    <tag load="mofron-effect-color">Color</tag>
</require>

<Frame>
    <effect>
        <Color delay=1000 speed=1000>[255,230,230]</Color>
    </effect>
</Frame>
```

# Parameter

| Short<br>Form | Parameter Name | Type | Description |
|:-------------:|:---------------|:-----|:------------|
| | type | string | color type ['main'/'base'/'accent'] |
| ◯  | color | mixed(color) | effect color |

