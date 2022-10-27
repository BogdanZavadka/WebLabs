import Block from '../Block/Block.jsx'

export default function Blocks(props) {
    let blocks = props.blocks;
    console.log(blocks);
    let renderedBlocks = blocks.map(item =>
        <Block description={item.description} key={blocks.indexOf(item)}></Block>)
    return (
        <div className='toys'>
            {renderedBlocks}
        </div>
    )
}