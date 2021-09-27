# Brazilian Masks

Some masks commonly used in forms in Brazil

## Available Masks

- phone (dynamically changes)
- cnpj
- cpf
- cpfOrCnpj (dynamically changes)
- cep
- pis

## Utility functions

- clear (remove all non-numereic characters)

### Simple use (Vanilla JS)

```js
import { clear, cep } from '@nafuzi/brazilian-masks'

const cepInput = document.getElementById('cep-input')

cepInput.addEventListener('input', (event) => {
  const { value } = event.target

  cepInput.value = cep(value)
})
```

### React (TypeScript)

```ts
// MaskedInput.tsx
import { ChangeEvent, HTMLProps } from 'react'
import masks, { MasksName } from '@nafuzi/brazilian-masks'

type MaskedInputProps = {
  mask: MasksName
  onChange: (maskedValue: string) => void
} & Omit<HTMLProps<HTMLInputElement>, 'onChange'>

export const MaskedInput = ({
  name,
  value,
  onChange,
  mask,
  ...rest
}: MaskedInputProps) => {
  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    const maskedValue = masks[mask](event.target.value)

    onChange(maskedValue)
  }

  return <input onChange={handleOnChange} value={value} {...rest} />
}

// App.tsx
import { useState } from 'react'

import { MaskedInput } from './components/MaskedInput'

const App = () => {
  const [cpf, setCpf] = useState('')

  return (
    <MaskedInput
      name="cpf"
      value={cpf}
      onChange={(value) => setCpf(value)}
      mask="cpf"
    />
  )
}

export default App
```

## Contributing

Feel free to create issues and open PR's with features, improvements, bugfix, etc.

## License

MIT
