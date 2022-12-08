export const communityList = () => {
  return [
    {
      id: 0,
      text: '전체'
    },
    {
      id: 1,
      text: '1청년부'
    },
    {
      id: 2,
      text: '2청년부'
    },
    {
      id: 3,
      text: '3청년부'
    },
    {
      id: 4,
      text: '신혼브릿지'
    }
  ]
}

export const findCommunityName = (communityId: any) => {
  const community = communityList()
    .find(obj => obj.id == communityId);
  return community?.text??'없음';
}
