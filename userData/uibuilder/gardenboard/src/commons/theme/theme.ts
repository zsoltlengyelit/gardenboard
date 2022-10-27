import { canvas } from '@instructure/ui-themes';
import { Overrides } from '@instructure/emotion/types/EmotionTypes';
import { View } from '@instructure/ui-view';
import { AppNav } from '@instructure/ui-navigation';
import { Link } from '@instructure/ui-link';

export const appTheme: Overrides = {
  ...canvas,
  componentOverrides: {
    [View.componentId]: {
      backgroundBrand: canvas.colors.backgroundBrandSecondary
    },
    [AppNav.Item.componentId]: {
      textColor: canvas.colors.white
    },
    [Link.componentId]: {
      textDecorationWithinText: 'none',
      iconPlusTextMargin: canvas.spacing.small
    }
  }
};
