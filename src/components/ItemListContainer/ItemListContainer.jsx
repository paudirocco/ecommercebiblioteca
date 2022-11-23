import Proptypes from 'prop-types'

const ItemListContainer = ({greeting}) => {
    return (
        <div className="greeting__listcontainer">
            {greeting}
        </div>
    )
}

ItemListContainer.proptype = {
    listas: Proptypes.element
}

export default ItemListContainer;