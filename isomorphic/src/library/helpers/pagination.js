import drop from 'lodash/drop';
import take from 'lodash/take';
import shuffle from 'lodash/shuffle';

export default function getPaginatedItems(
  items = [],
  page = 1,
  limit = 10,
  loadMore = false,
  param = {}
) {
  let data = [];
  if (!items) return [];
  const total = items.length;
  items = filterData(items, param);
  if (loadMore) {
    data = take(items, page * limit);
  } else {
    if (page * limit > total) return getPaginatedItems(items, page - 1, limit);
    data = take(drop(items, (page - 1) * limit), limit);
  }
  return {
    data,
    page,
    limit,
    total,
  };
}

const filterData = (items, param) => {
  // console.log('Search & filtering code will be here.');
  const defaultParamLength = 2; // default param object is {page: 1, limit: 10}
  if (Object.keys(param).length !== defaultParamLength) {
    return shuffle(items);
  } else {
    return items;
  }
};
