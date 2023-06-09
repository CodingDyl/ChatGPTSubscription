import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/StarBorder';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';

import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../../utils/motion';
import { styles } from '../../styles';
import { SectionWrapper } from '../../hoc';
import { Tilt } from 'react-tilt';
import { root } from 'postcss';
import LoginModal from '../modal/LoginModal';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const tiers = [
  {
    title: 'Free',
    price: '0',
    description: [
      '5 messages per day',
      '1 voice note per day',
      'No Help center access',
      'Email support',
    ],
    buttonText: 'Sign up for free',
    buttonVariant: 'outlined',
  },
  {
    title: 'Pro',
    subheader: 'Most popular',
    price: '7',
    description: [
      '150 Messages per day',
      '10 voice notes per day',
      'Help center access',
      'Priority email support',
    ],
    buttonText: 'Subscribe',
    buttonVariant: 'contained',
  },
  {
    title: 'Enterprise',
    price: '15',
    description: [
      'Unlimited messages',
      'Unlimited voice notes',
      'Help center access',
      'Phone & email support',
    ],
    buttonText: 'Subscribe',
    buttonVariant: 'outlined',
  },
];

const tops = [

  {
    title: 'Top-Up 50',
    price: '5',
    description: [
      '5 messages per day',
      '1 voice note per day',
      'No Help center access',
      'Email support',
    ],
    buttonText: 'Sign up for free',
    buttonVariant: 'outlined',
  },
  {
    title: 'Pro',
    subheader: 'Most popular',
    price: '7',
    description: [
      '150 Messages per day',
      '10 voice notes per day',
      'Help center access',
      'Priority email support',
    ],
    buttonText: 'Subscribe',
    buttonVariant: 'contained',
  },
  {
    title: 'Enterprise',
    price: '15',
    description: [
      'Unlimited messages',
      'Unlimited voice notes',
      'Help center access',
      'Phone & email support',
    ],
    buttonText: 'Subscribe',
    buttonVariant: 'outlined',
  },
];

function Pricing() {

  const [open, setOpen] = React.useState(false);

  const handleSignUp = () => {
    setOpen(true);
  }

  const handleSubscription = () => {
    console.log("Subscribed");
  }

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Want to get started?</p>
        <h2 className={styles.sectionHeadText}>Pricing.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("left", "spring", 0.5, 0.75)}
        className='mt-4 text-white text-[17px] max-w-3xl leading-[30px] mb-10'
      >
        At our WhatsApp ChatGPT service, we offer different packages to meet the varying needs of our customers. At each level, we aim to provide our customers with a high-quality, reliable service that meets their specific needs and helps them to achieve their goals.
      </motion.p>


      <Container maxWidth="md" component="main" className="h-auto items-center flex flex-col justtify-center">
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier, index) => (
            // Enterprise card is full width at sm breakpoint
            <Grid
              item
              key={tier.title}
              xs={12}
              sm={tier.title === 'Enterprise' ? 12 : 6}
              md={4}
            >
              <Tilt >
              <motion.div
                variants={fadeIn("right", "spring", index * 0.5, 0.75)}
                className='w-full green-pink-gradient p-[2px] rounded-[5px] shadow-card'
              >
              <Card style={{backgroundColor: "#090325", color: "white", }}>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  action={tier.title === 'Pro' ? <StarIcon /> : null}
                  subheaderTypographyProps={{
                    align: 'center',
                    color: '#00B700'
                  }}
                  className="bg-black-200 text-white border-b-2 border-secondary"
                />
                <CardContent>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'baseline',
                      mb: 2,
                    }}
                  >
                    <Typography component="h2" variant="h3" color="#00B700 !important">
                      ${tier.price}
                    </Typography>
                    <Typography variant="h6" color="#00B700">
                      /mo
                    </Typography>
                  </Box>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"
                        key={line}
                      >
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button fullWidth variant={tier.buttonVariant} sx={{backgroundColor: '#00B700', color: '#f3f3f3', border: 'none', '&:hover': {backgroundColor: 'transparent', color: "white", border: '2px solid #00B700' }}} onClick={tier.buttonText === "Subscribe" ? handleSubscription : handleSignUp}>
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
              </motion.div>
              </Tilt>
            </Grid>
          ))}
        </Grid>
      </Container>
      <LoginModal opened={open} close={() => setOpen(false)} />
    </>
  );
}

export default SectionWrapper(Pricing, "services");