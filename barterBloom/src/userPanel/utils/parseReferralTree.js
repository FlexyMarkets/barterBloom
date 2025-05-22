export function parseReferralTree(data) {
  const result = [];

  for (const key in data) {
    const child = data[key];

    const node = {
      title: key,
      hasChildren: child && typeof child === 'object',
      children: child && typeof child === 'object' ? parseReferralTree(child) : []
    };

    result.push(node);
  }

  return result;
}


// export function collectAllTitles(tree) {
//   let titles = [];

//   tree.forEach(node => {
//     titles.push(node.title);
//     if (node.children && node.children.length > 0) {
//       titles = titles.concat(collectAllTitles(node.children));
//     }
//   });

//   return titles;
// }

export function collectAllReferralCodes(tree) {
  let codes = [];

  tree.forEach(node => {
    const match = node.title?.match(/-(\w+)-/);
    if (match && match[1]) {
      codes.push(match[1]); // only push the referral code
    }

    if (node.children && node.children.length > 0) {
      codes = codes.concat(collectAllReferralCodes(node.children));
    }
  });

  return codes;
}