import { expandCollapse } from '@deltagis/animations/expand-collapse';
import {
    fadeIn,
    fadeInBottom,
    fadeInLeft,
    fadeInRight,
    fadeInTop,
    fadeOut,
    fadeOutBottom,
    fadeOutLeft,
    fadeOutRight,
    fadeOutTop,
} from '@deltagis/animations/fade';
import { shake } from '@deltagis/animations/shake';
import {
    slideInBottom,
    slideInLeft,
    slideInRight,
    slideInTop,
    slideOutBottom,
    slideOutLeft,
    slideOutRight,
    slideOutTop,
} from '@deltagis/animations/slide';
import { zoomIn, zoomOut } from '@deltagis/animations/zoom';

export const fuseAnimations = [
    expandCollapse,
    fadeIn,
    fadeInTop,
    fadeInBottom,
    fadeInLeft,
    fadeInRight,
    fadeOut,
    fadeOutTop,
    fadeOutBottom,
    fadeOutLeft,
    fadeOutRight,
    shake,
    slideInTop,
    slideInBottom,
    slideInLeft,
    slideInRight,
    slideOutTop,
    slideOutBottom,
    slideOutLeft,
    slideOutRight,
    zoomIn,
    zoomOut,
];
