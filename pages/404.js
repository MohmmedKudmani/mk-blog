import {
  createStyles,
  Title,
  Text,
  Button,
  Container,
  Group,
  Box,
} from '@mantine/core'
import { useRouter } from 'next/router'

const useStyles = createStyles((theme) => ({
  root: {
    paddingTop: 80,
    paddingBottom: 80,
  },

  label: {
    textAlign: 'center',
    fontWeight: 900,
    fontSize: 220,
    lineHeight: 1,
    marginBottom: theme.spacing.xl * 1.5,
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[4]
        : theme.colors.gray[2],

    [theme.fn.smallerThan('sm')]: {
      fontSize: 120,
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    textAlign: 'center',
    fontWeight: 900,
    fontSize: 38,

    [theme.fn.smallerThan('sm')]: {
      fontSize: 32,
    },
  },

  description: {
    maxWidth: 500,
    margin: 'auto',
    marginTop: theme.spacing.xl,
    marginBottom: theme.spacing.xl * 1.5,
  },
}))

export function ErrorPage() {
  const { classes } = useStyles()
  const router = useRouter()

  return (
    <Box
      sx={(theme) => ({
        marginLeft: '16.9rem',
        marginTop: '6.3rem',
        [theme.fn.smallerThan('md')]: {
          marginLeft: '0',
        },
      })}
    >
      <Container className={classes.root} px='xl' size='1550px'>
        <Box className={classes.label}>404</Box>
        <Title className={classes.title}>Not Found Page</Title>
        <Text
          color='dimmed'
          size='lg'
          align='center'
          className={classes.description}
        >
          You may have mistyped the address, or the page has been moved to
          another URL.
        </Text>
        <Group position='center'>
          <Button onClick={() => router.push('/')} size='md'>
            Take me back to home page
          </Button>
        </Group>
      </Container>
    </Box>
  )
}

export default ErrorPage
