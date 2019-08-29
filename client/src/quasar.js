import Vue from 'vue'

import './styles/quasar.styl'
import '@quasar/extras/material-icons/material-icons.css'
import {
  Quasar, 
  QLayout,
  QHeader,
  QDrawer,
  QPageContainer,
  QPage,
  QToolbar,
  QToolbarTitle,
  QBtn,
  QIcon,
  QList,
  QItem,
  QItemSection,
  QItemLabel,
  QSelect,
  QStep,
  QStepper,
  QStepperNavigation,
  QTab,
  QTabPanel,
  QTabPanels,
  QTabs,
  QBanner,
  QCard,
  QBtnToggle,
  QCardSection,
  QCardActions,
  QSeparator,
  QExpansionItem,
  QSplitter
  

} from 'quasar'

Vue.use(Quasar, {
  config: {},
  components: {
    QLayout,
    QHeader,
    QDrawer,
    QPageContainer,
    QPage,
    QToolbar,
    QToolbarTitle,
    QBtn,
    QIcon,
    QList,
    QItem,
    QItemSection,
    QItemLabel,
    QSelect,
    QStep,
    QStepper,
    QStepperNavigation,
    QTab,
    QTabPanel,
    QTabPanels,
    QTabs,
    QBanner,
    QCard,
    QBtnToggle,
    QCardSection,
    QCardActions,
    QExpansionItem,
    QSeparator,
    QSplitter,

  },
  directives: {
  },
  plugins: {
  }
 })