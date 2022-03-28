import React, { useMemo } from 'react';
import styled from 'styled-components';

import { Button, Card, CardContent } from '@material-ui/core';
// import Button from '../../../components/Button';
// import Card from '../../../components/Card';
// import CardContent from '../../../components/CardContent';
import CardIcon from '../../../components/CardIcon';
import Label from '../../../components/Label';
import Value from '../../../components/Value';

import useEarnings from '../../../hooks/useEarnings';
import useHarvest from '../../../hooks/useHarvest';

import { getDisplayBalance } from '../../../utils/formatBalance';
import TokenSymbol from '../../../components/TokenSymbol';
import { Bank } from '../../../tomb-finance';
import useTombStats from '../../../hooks/useTombStats';
import useShareStats from '../../../hooks/usetShareStats';
import Crypto11 from "../../../assets/img/crypto_tomb_cash.f2b44ef4.png"
import Fantom from "../../../assets/img/fantom.7660b7c5.svg"

interface HarvestProps {
  bank: Bank;
}

const Harvest: React.FC<HarvestProps> = ({ bank }) => {
  const earnings = useEarnings(bank.contract, bank.earnTokenName, bank.poolId);
  const { onReward } = useHarvest(bank);
  const tombStats = useTombStats();
  const tShareStats = useShareStats();

  const tokenName = bank.earnTokenName === 'PSHARES' ? 'PSHARES' : 'SCT';
  const tokenStats = bank.earnTokenName === 'PSHARES' ? tShareStats : tombStats;
  const tokenPriceInDollars = useMemo(
    () => (tokenStats ? Number(tokenStats.priceInDollars).toFixed(2) : null),
    [tokenStats],
  );
  const earnedInDollars = (Number(tokenPriceInDollars) * Number(getDisplayBalance(earnings))).toFixed(2);
  return (
    <div className='cemetry_cards-1'>
      <div>
            <div className='cemetry_images'>
              {/* <TokenSymbol symbol={bank.earnToken.symbol} /> */}
              <div className="rounded icons-harvest icon-mar"><img src={Crypto11} width="50" height="50"/></div>

            </div>
        <StyledCardContentInner>
          <StyledCardHeader>
            <Value value={getDisplayBalance(earnings)} />
            <Label text={`≈ $${earnedInDollars}`} />
            <Label text={`${tokenName} Earned`} />
          </StyledCardHeader>
          <StyledCardActions>
            <Button onClick={onReward} disabled={earnings.eq(0)} color="primary" variant="contained">
              Claim
            </Button>
          </StyledCardActions>
        </StyledCardContentInner>
      </div>
    </div>
  );
};

const StyledCardHeader = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;
const StyledCardActions = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${(props) => props.theme.spacing[6]}px;
  width: 100%;
`;

const StyledCardContentInner = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
`;

export default Harvest;
