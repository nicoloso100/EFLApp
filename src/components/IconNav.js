import React from 'react';
import {Icon} from 'react-native-elements';
import {navIconColor} from '../views/colors';

/**
 * Ícono de la barra de navegación
 * Uso:
 * ```html
 * <NavIcon/>
 * ```
 * Utiliza los íconos de react-native-elements
 */

export const NavIcon = () => {
  return <Icon name="circle" type="font-awesome" color={navIconColor} />;
};
