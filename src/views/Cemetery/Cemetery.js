import React from 'react';
import { useWallet } from 'use-wallet';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import Bank from '../Bank';
import moment from 'moment';
import { Box, Container, Typography, Grid } from '@material-ui/core';
import Crypto11 from "../../assets/img/crypto_tomb_cash.f2b44ef4.png"
import Fantom from "../../assets/img/fantom.7660b7c5.svg"
import MAI from "../../assets/img/MAI.0290c194.svg"
import Waves from "../../assets/img/sky.352b80b2.svg"
import Cemetryy from "../../assets/img/cemetry.png"

import { Alert } from '@material-ui/lab';
import ProgressCountdown from './components/ProgressCountdown';
import UnlockWallet from '../../components/UnlockWallet';
import Page from '../../components/Page';
import CemeteryCard from './CemeteryCard';
import { createGlobalStyle } from 'styled-components';
import CemeteryImage from '../../assets/img/background.png';
import Stats from "../Home/Stats"
import useBanks from '../../hooks/useBanks';
import {Link} from "react-router-dom"

// const BackgroundImage = createGlobalStyle`
//   body {
//     background-color: #ffffff;
//     background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.12'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0H5v5H0v1h5v94h1V6h94V5H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
//   }
// `;

// const BackgroundImage = createGlobalStyle`
//   body {
//     background-color: var(--black);
//     background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='32' viewBox='0 0 16 32'%3E%3Cg fill='%231D1E1F' fill-opacity='0.4'%3E%3Cpath fill-rule='evenodd' d='M0 24h4v2H0v-2zm0 4h6v2H0v-2zm0-8h2v2H0v-2zM0 0h4v2H0V0zm0 4h2v2H0V4zm16 20h-6v2h6v-2zm0 4H8v2h8v-2zm0-8h-4v2h4v-2zm0-20h-6v2h6V0zm0 4h-4v2h4V4zm-2 12h2v2h-2v-2zm0-8h2v2h-2V8zM2 8h10v2H2V8zm0 8h10v2H2v-2zm-2-4h14v2H0v-2zm4-8h6v2H4V4zm0 16h6v2H4v-2zM6 0h2v2H6V0zm0 24h2v2H6v-2z'/%3E%3C/g%3E%3C/svg%3E");
// }

// * {
//     border-radius: 0 !important;
// }
// `;

const BackgroundImage = createGlobalStyle`
  body {
    background: url(${Waves}) no-repeat top, url(${Cemetryy}) no-repeat top;
  
    background-size: cover !important;
  }
`;

const Cemetery = () => {
  const [banks] = useBanks();
  const { path } = useRouteMatch();
  const { account } = useWallet();
  const activeBanks = banks.filter((bank) => !bank.finished);
  const GenesisPoolStartTimeStamp = 1648346400;
  const MainFarmStartTimeStamp = 1648346400;

  return (
    <Switch>
      <Page>
        <Route exact path={path}>
          <BackgroundImage />
          <Stats/>

          {!!account ? (
            <Container maxWidth="lg">
              <Typography color="textPrimary" align="center" variant="h3" gutterBottom>
                <strong style={{color:"wheat"}}>Cemetry</strong>
              </Typography>
                <div className='bio wheat center'>Earn TSHARE by staking LP</div>
              <Box mt={5}>
                <div hidden={activeBanks.filter((bank) => bank.sectionInUI === 3).length === 0}>
                  {/* <Typography color="textPrimary" variant="h4" gutterBottom>
                    <strong style={{color:"#ff4c39"}}>Earn PSHARES by staking LP Tokens</strong>
                  </Typography> */}
                  {/* <Alert variant="filled" severity="info" style={{ backgroundColor:"#06296e", marginBottom:'20px'}}>
                    Farms start at 6:00 PM UTC on Mar 17
                    <ProgressCountdown base={moment().toDate()} unix_deadline={MainFarmStartTimeStamp} description="Farms start in" />
                  </Alert> */}
                  {/* <div className="cemetry_cards">
    <div className="cemetry_cards-1">
        <div className="cemetry_images">
    <div class="rounded"><img src={Crypto11} width="50" height="50"/></div>
    <div class="rounded"><img src={Fantom} width="50" height="50"/></div>
    </div>

<div className='cemetry_heading'>TOMB-FTM-LP</div>
<div className="deposit">Deposit:</div>
<div className="deposit">TOMB-FTM-LP Earn TSHARE</div>
<button className='btn'>View</button>
    </div>
    <div className="cemetry_cards-1">
    <div className="cemetry_images">
    <div class="rounded"><img src={Crypto11} width="50" height="50"/></div>
    <div class="rounded"><img src={Fantom} width="50" height="50"/></div>
    </div>
<div className='cemetry_heading'>TOMB-FTM-LP</div>
<div className="deposit">Deposit:</div>
<div className="deposit">TOMB-FTM-LP Earn TSHARE</div>
<button className='btn'>View</button>
    </div>
    <div className="cemetry_cards-1">
    <div className="cemetry_images">
    <div class="rounded"><img src={Crypto11} width="50" height="50"/></div>
    <div class="rounded"><img src={MAI} width="50" height="50"/></div>
    </div>
<div className='cemetry_heading'>TOMB-FTM-LP</div>
<div className="deposit">Deposit:</div>
<div className="deposit">TOMB-MAI-LP Earn TSHARE</div>
<button className='btn'>View</button>
    </div>

</div> */}
                  <Grid container spacing={2}>
                    {activeBanks
                      .filter((bank) => bank.sectionInUI === 2)
                      .map((bank) => (
                        <React.Fragment key={bank.name}>
                          <CemeteryCard bank={bank} />
                        </React.Fragment>
                      ))}
                  </Grid>
                </div>

                <div hidden={activeBanks.filter((bank) => bank.sectionInUI === 1).length === 0}>
                  {/* <Typography color="textPrimary" variant="h4" gutterBottom style={{ marginTop: '20px' }}>
                    <strong style={{color:"#ff4c39"}}>Earn SCT by staking LP Tokens</strong>
                  </Typography> */}
                  {/* <Alert variant="filled" severity="warning">
                    All below pools have ended. Please unstake and collect your rewards.
                  </Alert> */}
                  {/* <Alert variant="filled" severity="info" style={{ backgroundColor:"#06296e", marginBottom:'20px'}}>
                    Farm starts at 6:00 PM UTC on Mar 17 and will run for 3 days.
                    <ProgressCountdown base={moment().toDate()} unix_deadline={MainFarmStartTimeStamp} description="Farm starts in" />
                  </Alert> */}
                  {/* <Grid container spacing={3} style={{ marginTop: '20px' }}>
                    {activeBanks
                      .filter((bank) => bank.sectionInUI === 1)
                      .map((bank) => (
                        <React.Fragment key={bank.name}>
                          <CemeteryCard bank={bank} />
                        </React.Fragment>
                      ))}
                  </Grid> */}
                </div>
                
                {/* <Alert variant="filled" severity="info" style={{ marginTop: '50px' }}>
                  All below pools have ended. Please unstake and collect your rewards.
                </Alert> */}

                {/* <div hidden={activeBanks.filter((bank) => bank.sectionInUI === 0).length === 0}>
                  <Typography color="textPrimary" variant="h4" gutterBottom style={{ marginTop: '30px', marginBottom: '10px' }}>
                  <strong style={{color:"#ff4c39"}}>Genesis Pools</strong>
                  </Typography>
                  <Alert variant="filled" severity="info" style={{backgroundColor:"#06296e", marginBottom:'20px'}}>
                    Genesis Pools start at 6:00 PM UTC on Mar 17 and will run for 1 day.
                    <ProgressCountdown base={moment().toDate()} unix_deadline={GenesisPoolStartTimeStamp} description="Pools start in" />
                  </Alert>
                  <Grid container spacing={3}>
                    {activeBanks
                      .filter((bank) => bank.sectionInUI === 0)
                      .map((bank) => (
                        <React.Fragment key={bank.name}>
                          <CemeteryCard bank={bank} />
                        </React.Fragment>
                      ))}
                  </Grid>
                </div> */}
                 
              </Box>
            </Container>
          ) : (
            <UnlockWallet />
          )}
        </Route>
        <Route path={`${path}/:bankId`}>
          <BackgroundImage />
          <Bank />
        </Route>
      </Page>
    </Switch>
  );
};

export default Cemetery;
