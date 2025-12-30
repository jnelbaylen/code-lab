import { Fragment } from 'react';

import { RefSummary } from '@hooks/ref/RefSummary';
import { StateSummary } from '@hooks/state/StateSummary';
import { EffectSummary } from '@hooks/effect/EffectSummary';

export function Root(){
    return(
        <Fragment>
            <RefSummary />
            <StateSummary />
            <EffectSummary />
        </Fragment>
    );
}

