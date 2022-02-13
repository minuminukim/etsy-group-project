const CartFooter = () => {



    return (
        <div className="shoppingCartFooter">
            <div className="gitHubCartFooterDiv">
                <div className="usCartLanguageText">United States   |   English (US)   |   $ (USD)</div>
                <div className="cartGithubContainer">
                    <div className="gitHubCartText">Githubs: </div>
                    <a className='footer-link-Cart' href='https://github.com/scorrea310' target="_blank" rel="noreferrer">Steve Correa</a>
                    <a className='footer-link-Cart' href='https://github.com/minuminukim' target="_blank" rel="noreferrer">Minu Kim</a>
                    <a className='footer-link-Cart' href='https://github.com/grantongrant' target="_blank" rel="noreferrer">Grant Russell</a>
                    <a className='footer-link-Cart' href='https://github.com/verduscos' target="_blank" rel="noreferrer">Eddie Verdusco</a>
                </div>

            </div>
            <div className="merchantIsTextAndLinkedins">
                <div>Merchant is Qwerty, Inc. (USA) or Qwerty Mars (Planet Mars), depending on the currency (and planet) in which the Seller transacts.</div>
                <div className="cartLinkedinContainer">
                    <div className="gitHubCartText">Linkedin: </div>
                    <a className='footer-link-Cart' href='https://www.linkedin.com/in/steve-correa/' target="_blank" rel="noreferrer">Steve Correa</a>
                    <a className='footer-link-Cart' href='https://www.linkedin.com/in/minu-kim-911bbb192/' target="_blank" rel="noreferrer">Minu Kim</a>
                    <a className='footer-link-Cart' href='https://www.linkedin.com/in/grant-ellis-russell' target="_blank" rel="noreferrer">Grant Russell</a>
                    <a className='footer-link-Cart' href='https://www.linkedin.com/in/eddie-verdusco/' target="_blank" rel="noreferrer">Eddie Verdusco</a>
                </div>
            </div>

        </div>
    )
}

export default CartFooter