import React from 'react'
import { IndexLink, Link } from 'react-router'
import PropTypes from 'prop-types'
import './PageLayout.sass'
import Header from '../../components/Header'
// SABİT DEĞİŞKEN CONST
export const PageLayout = ({ children }) => (
  <div>
    <Header />
  </div>

)
PageLayout.propTypes = {
  children: PropTypes.node,
}

export default PageLayout
// Export kullanarak PageLayotu modülün dışına çıkarmış oluyoruz
// Default adece bir kere kullanılabilir modülde.
// Birden fazla export ypılacağı durumlarda {} köşe parentezi kullanılır importta olduuğ gibi
