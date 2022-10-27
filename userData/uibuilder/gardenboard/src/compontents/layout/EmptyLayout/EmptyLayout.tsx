import { AppNav, Heading, Text, View } from '@instructure/ui';
import { Renderable } from '@instructure/shared-types';
import { Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

type Props = {
    appNavRenderAfterItems?: Renderable;
};

export default function EmptyLayout({ appNavRenderAfterItems }: Props) {

  const { t } = useTranslation();

  return ( 
        <>
            <View
                as="header"
                background="brand"
            >
                <AppNav
                    screenReaderLabel={'application nav'}
                    renderBeforeItems={
                        <View
                            as="div"
                            padding="x-small medium"
                            background="primary-inverse"
                        >
                            <Heading level="h4">{t('common.applicationName')}</Heading>
                            <Text
                                size="x-small"
                                color="secondary-inverse"
                            >{t('common.byGardenboard')}
                            </Text>
                        </View>
                    }
                    renderAfterItems={
                        appNavRenderAfterItems
                    }
                />
            </View>

            <View
                as="section"
                margin="medium"
            >
                <Outlet/>
            </View>

        </>
  );

}
