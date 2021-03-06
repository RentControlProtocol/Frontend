import React, { useMemo } from 'react';
import styled from 'styled-components';
import useTokenBalance from '../../hooks/useTokenBalance';
import { getDisplayBalance } from '../../utils/formatBalance';

import Label from '../Label';
import Modal, { ModalProps } from '../Modal';
import ModalTitle from '../ModalTitle';
import useRentControl from '../../hooks/useRentControl';
import TokenSymbol from '../TokenSymbol';

const AccountModal: React.FC<ModalProps> = ({ onDismiss }) => {
  const rentControl = useRentControl();

  const rentBalance = useTokenBalance(rentControl.RENT);
  const displayRentBalance = useMemo(() => getDisplayBalance(rentBalance), [rentBalance]);

  const rshareBalance = useTokenBalance(rentControl.RSHARE);
  const displayRshareBalance = useMemo(() => getDisplayBalance(rshareBalance), [rshareBalance]);

  const rbondBalance = useTokenBalance(rentControl.RBOND);
  const displayRbondBalance = useMemo(() => getDisplayBalance(rbondBalance), [rbondBalance]);

  return (
    <Modal>
      <ModalTitle text="My Wallet" />

      <Balances>
        <StyledBalanceWrapper>
          <TokenSymbol symbol="RENT" />
          <StyledBalance>
            <StyledValue>{displayRentBalance}</StyledValue>
            <Label text="RENT Available" />
          </StyledBalance>
        </StyledBalanceWrapper>

        <StyledBalanceWrapper>
          <TokenSymbol symbol="RSHARE" />
          <StyledBalance>
            <StyledValue>{displayRshareBalance}</StyledValue>
            <Label text="RSHARE Available" />
          </StyledBalance>
        </StyledBalanceWrapper>

        <StyledBalanceWrapper>
          <TokenSymbol symbol="RBOND" />
          <StyledBalance>
            <StyledValue>{displayRbondBalance}</StyledValue>
            <Label text="RBOND Available" />
          </StyledBalance>
        </StyledBalanceWrapper>
      </Balances>
    </Modal>
  );
};

const StyledValue = styled.div`
  //color: ${(props) => props.theme.color.grey[300]};
  font-size: 30px;
  font-weight: 700;
`;

const StyledBalance = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const Balances = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: ${(props) => props.theme.spacing[4]}px;
`;

const StyledBalanceWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 0 ${(props) => props.theme.spacing[3]}px;
`;

export default AccountModal;
