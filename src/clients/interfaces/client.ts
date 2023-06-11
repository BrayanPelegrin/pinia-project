interface IClient {
  id: number
  isActive: boolean
  picture: string
  age: number
  eyeColor: EyeColor
  name: string
  gender: Gender
  company: string
  email: string
  phone: string
  address: string
}

enum EyeColor {
  Blue = 'blue',
  Brown = 'brown',
  Green = 'green'
}

enum Gender {
  Female = 'female',
  Male = 'male'
}
export type { IClient }
export { EyeColor, Gender }
