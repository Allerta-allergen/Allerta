import React from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'; // Import from Chakra UI

function LanguageSwitcher() {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Menu>
      <MenuButton as="button" color="black">
        {t(i18n.language)}
      </MenuButton>
      <MenuList>
        <MenuItem onClick={() => handleLanguageChange('en')}>
          {t('english')}
        </MenuItem>
        <MenuItem onClick={() => handleLanguageChange('et')}>
          {t('estonian')}
        </MenuItem>
      </MenuList>
    </Menu>
  );
}

export default LanguageSwitcher;
