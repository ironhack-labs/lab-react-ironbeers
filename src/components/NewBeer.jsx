import React from 'react'
import New from '../assets/new-beer.png'
import {useState} from 'react'
import {Header,} from '@mantine/core'


function NewBeer() {
  return (
    <div>
    <Header height={60}  p="xs">Header</Header>
    <img src={New} alt='newBeer' />
    <div>
    <h1>NewBeer</h1>
    </div>
    </div>

  )
  }
// function Demo() {
//     return (
//       <AppShell
//         // padding="md"
//         // navbar={<Navbar width={{ base: 300 }} height={500} p="xs">{/* Navbar content */}</Navbar>}
//         header={<Header height={60} p="xs">{/* Header content */}</Header>}
//         styles={(theme) => ({
//           main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
//         })}
//       >
//         {/* Your application here */}
//       </AppShell>
//     );
//   }
   
 




export default NewBeer


// import React from 'react'

// const NewBeer = () => {
//   return (
//     <div>NewBeer</div>
//   )
// }

// export default NewBeer
