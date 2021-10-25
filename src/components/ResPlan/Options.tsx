import React, { FC, useState } from 'react'
import { Popover, ArrowContainer } from 'react-tiny-popover'
import MoreIcon from '../../assets/icons/more.svg'

const Options: FC<{ setCard: Function }> = ({ setCard }) => {
    const [isPopoverOpen, setIsPopoverOpen] = useState(false)

    return (
      <Popover
        isOpen={isPopoverOpen}
        positions={['right', 'left', 'bottom', 'top']}
        padding={10}
        onClickOutside={() => setIsPopoverOpen(false)}
        content={({ position, childRect, popoverRect }) => (
          <ArrowContainer
            position={position}
            childRect={childRect}
            popoverRect={popoverRect}
            arrowColor={'#07080D'}
            arrowSize={15}
            className='popover-arrow-container'
            arrowClassName='popover-arrow'
          >
            <div className="options-pop-over">
                <div className="option" onClick={() => setCard("set")}>Set Plan limit</div>
                <div className="option" onClick={() => setCard("remove")}>Remove Plan limit</div>
                <div className="option" onClick={() => setCard("top-up")}>Quick Top Up</div>
            </div>
          </ArrowContainer>
      )}
    >
      <img src={MoreIcon} className="show-more" alt="Show more" 
        onClick={() => setIsPopoverOpen(!isPopoverOpen)} />
    </Popover>
    );
}


export default Options
