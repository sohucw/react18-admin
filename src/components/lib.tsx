import styled from '@emotion/styled';
type RowProps = {
    gap?: string | number | boolean;
};

export const Row = styled.div<RowProps>`
    display: flex;
    align-items: center;
    > * {
        margin-top: 0 !important;
        margin-bottom: 0 !important;
        margin-right: ${(props) =>
            typeof props.gap === 'number' ? props.gap + 'rem' : props.gap ? '2rem' : undefined};
    }
`;
