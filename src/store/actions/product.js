import { query } from '../../services/products';

export const loadProduct = (playload) => async dispatch => {
    // console.log('action playload is ', playload);
    const res = await query(playload.page, playload.per);
    // console.log('products is ', res);
    dispatch({
        type: 'PRODUCT_LOADED',
        playload: { ...res, page: playload.page, pageSize: playload.per }
    });
}