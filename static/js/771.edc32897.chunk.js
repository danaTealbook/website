"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[771],{771:(o,t,i)=>{i.d(t,{OpacityUpdater:()=>e});var a=i(4631);class e{constructor(o){this.container=o}init(o){const t=o.options.opacity;o.opacity=(0,a.Xs)(t,1);const i=t.animation;i.enable&&(o.opacity.velocity=(0,a.VG)(i.speed)/a.a5*this.container.retina.reduceFactor,i.sync||(o.opacity.velocity*=(0,a.G0)()))}isEnabled(o){var t,i,a,e;return!o.destroyed&&!o.spawning&&!!o.opacity&&o.opacity.enable&&((null!==(t=o.opacity.maxLoops)&&void 0!==t?t:0)<=0||(null!==(i=o.opacity.maxLoops)&&void 0!==i?i:0)>0&&(null!==(a=o.opacity.loops)&&void 0!==a?a:0)<(null!==(e=o.opacity.maxLoops)&&void 0!==e?e:0))}reset(o){o.opacity&&(o.opacity.time=0,o.opacity.loops=0)}update(o,t){this.isEnabled(o)&&o.opacity&&(0,a.UC)(o,o.opacity,!0,o.options.opacity.animation.destroy,t)}}}}]);