import { createContext } from 'react';

import SHOP_DATA from './shop.data'


export const selectCollectionsForPreview = () => Object.keys(SHOP_DATA).map(key => SHOP_DATA[key])


const CollectionsContext = createContext(SHOP_DATA)

export default CollectionsContext;

