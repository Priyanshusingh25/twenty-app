import { defineFrontComponent } from 'twenty-sdk/define';
import { Avatar } from 'twenty-ui/data-display';

import {
  APP_DISPLAY_NAME,
  MAIN_PAGE_FRONT_COMPONENT_UNIVERSAL_IDENTIFIER,
} from 'src/constants/universal-identifiers';

const MainPage = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        fontFamily:
          'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        gap: '8px',
      }}
    >
      <Avatar
        placeholder={APP_DISPLAY_NAME}
        placeholderColorSeed={APP_DISPLAY_NAME}
        size="xl"
      />
      <span
        style={{
          fontSize: '24px',
          fontWeight: 600,
          color: '#333',
          marginTop: '8px',
        }}
      >
        {APP_DISPLAY_NAME}
      </span>
      <span
        style={{
          fontSize: '13px',
          color: '#888',
          textAlign: 'center',
          lineHeight: '1.5',
        }}
      >
        Was installed successfully.
        <br />
        You can now add content to your app.
      </span>
    </div>
  );
};

export default defineFrontComponent({
  universalIdentifier: MAIN_PAGE_FRONT_COMPONENT_UNIVERSAL_IDENTIFIER,
  name: APP_DISPLAY_NAME,
  description: `${APP_DISPLAY_NAME} front component displaying the app logo and name`,
  component: MainPage,
});
