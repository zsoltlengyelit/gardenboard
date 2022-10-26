import { View } from '@instructure/ui';
import EmptyLayout from '~/compontents/layout/EmptyLayout';

export default function Mainlayout() {

  return (
        <EmptyLayout
            appNavRenderAfterItems={
                <View margin="none medium">
                </View>
            }
        />
  );
}
