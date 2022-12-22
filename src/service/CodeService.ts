const UserState = {
  _code: [
    {
      code: 'BEFORE_SIGN',
      description: '회원가입 전'
    },
    {
      code: 'ACTIVE',
      description: '사용중'
    },
    {
      code: 'DORMANT',
      description: '휴면계정'
    },
    {
      code: 'VAN',
      description: '강제휴면'
    },
    {
      code: 'EXIT',
      description: '탈퇴'
    }
  ]
}

export const findByUserState = (code: string) => {
  let item = UserState._code.find(dto => dto.code === code);
  return item;
}
