import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'resources-page',
  styleUrl: 'resources-page.css'
})
export class ResourcesPage {

  @State() searchTerm: string = '';
  @State() isLoading: boolean = false;
  @State() activeTab: string = 'article-blogs';

  constructor() {
    document.title = `Stencil Resources`;
    this.activateTab = this.activateTab.bind(this);
    this.handleSearchInput = this.handleSearchInput.bind(this);
    this.filterLinks = this.filterLinks.bind(this);
  }

  activateTab = (ev: any) => {
    this.activeTab = ev.target.id;
  }

  handleSearchInput = (ev: any) => {
    ev.preventDefault();
    ev.stopPropagation();
    this.searchTerm = ev.target.value;
  }

  handleSearchSubmit = (ev: any) => {
    ev.preventDefault();
    ev.stopPropagation();
  }

  filterLinks(link: any) {
    if (!this.searchTerm.length) {
      return true;
    }

    return link.title.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1;
  }

  render() {
    return [
      <div class="container">
        <header>
          <h1 class="headline measure-md"><span>Resources</span> to help you get more out of Stencil</h1>
          <form class="form" onSubmit={this.handleSearchSubmit}>
            <div class="form-group">
              <input
                name="search"
                type="search"
                value={this.searchTerm}
                onInput={this.handleSearchInput}
                placeholder="Search Resources"
                aria-label="Search"
                required
              />
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.48776 6.4556C7.19995 6.16779 6.74338 6.16779 6.47995 6.4556C5.49557 7.43999 4.94434 8.75999 4.94434 10.1756C4.94434 11.5678 5.49653 12.8878 6.47995 13.8956C6.62433 14.04 6.81557 14.1112 6.98434 14.1112C7.15215 14.1112 7.34433 14.039 7.48872 13.8956C7.77653 13.6078 7.77653 13.1512 7.48872 12.8878C6.76872 12.1678 6.36091 11.2078 6.36091 10.2C6.36091 9.19227 6.76872 8.23223 7.48872 7.51227C7.75217 7.20008 7.75217 6.74447 7.48778 6.45572L7.48776 6.4556Z" fill="black" fill-opacity="0.5" />
                <path d="M21.12 20.1123L15.9844 14.9523C16.4644 14.3523 16.8722 13.7045 17.1601 13.0079C17.5201 12.0958 17.7122 11.1601 17.7122 10.1757C17.7122 9.19132 17.5201 8.2557 17.1601 7.34346C16.7757 6.40785 16.2244 5.56785 15.5044 4.84794C14.7844 4.12804 13.9444 3.57575 13.0089 3.19233C12.0967 2.83233 11.1611 2.64014 10.1767 2.64014C9.1923 2.64014 8.25668 2.83232 7.34444 3.19233C6.40882 3.57671 5.56883 4.12794 4.84892 4.84794C4.12902 5.56794 3.57673 6.40794 3.19331 7.34346C2.83331 8.25566 2.64111 9.19127 2.64111 10.1757C2.64111 11.1601 2.8333 12.0957 3.19331 13.0079C3.57769 13.9436 4.12892 14.7836 4.84892 15.5035C5.56892 16.2234 6.40892 16.7757 7.34444 17.1591C8.25663 17.5191 9.19225 17.7113 10.1767 17.7113C11.1611 17.7113 12.0967 17.5191 13.0089 17.1591C13.7289 16.8713 14.3767 16.4869 14.9533 15.9835L20.1123 21.1199C20.2567 21.2643 20.448 21.3356 20.6167 21.3356C20.8089 21.3356 20.9767 21.2634 21.1211 21.1199C21.408 20.8556 21.408 20.3999 21.1202 20.1121L21.12 20.1123ZM10.1755 16.2478C8.54329 16.2478 7.031 15.6235 5.87996 14.4722C3.50435 12.0966 3.50435 8.25671 5.87996 5.87999C7.05558 4.70438 8.61548 4.10438 10.1755 4.10438C11.7355 4.10438 13.2955 4.70438 14.471 5.87999C16.8466 8.25561 16.8466 12.0955 14.471 14.4722C13.3197 15.6244 11.8075 16.2478 10.1755 16.2478Z" fill="black" fill-opacity="0.5" />
              </svg>
            </div>
          </form>
        </header>

        <section>
          <div class="tabs">
            <div class="tablist" role="tablist" aria-label="Resources">
              <button role="tab"
                aria-selected="true"
                aria-controls="community-articles-blogs"
                id="article-blogs"
                class={this.activeTab === 'article-blogs' ? 'active' : ''}
                onClick={this.activateTab}>
                <span>
                  Community Articles/Blogs
                </span>
                <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.05098 25.8008C6.56073 25.8008 7.07053 25.8203 7.58028 25.8613C7.81075 25.8809 8.04122 25.9004 8.26973 25.9316C8.25996 25.9316 8.69942 25.9922 8.48067 25.9512C8.31075 25.9316 8.76973 26.0019 8.82051 26.0019C9.76971 26.1621 10.7209 26.3926 11.6311 26.6816C12.0705 26.8223 12.5119 26.9922 12.9416 27.1621C13.342 27.3223 12.7717 27.082 13.0119 27.1914C13.1115 27.2305 13.2111 27.2813 13.3127 27.3223C13.5529 27.4316 13.7932 27.543 14.0237 27.6621C14.8831 28.0918 15.7131 28.5918 16.4944 29.1524C16.674 29.2832 16.844 29.4121 17.0237 29.543C16.7932 29.3633 17.0237 29.543 17.0842 29.5938C17.1643 29.6641 17.2541 29.7344 17.3342 29.8047C17.7033 30.1153 18.0647 30.4239 18.4045 30.7657C18.7541 31.0957 19.0842 31.4454 19.4045 31.795C19.5549 31.9551 19.6936 32.125 19.8342 32.2852C19.9045 32.3653 19.9748 32.4551 20.0451 32.5352C20.0842 32.586 20.3654 32.9454 20.176 32.6954C20.7463 33.4454 21.2561 34.2247 21.715 35.0548C21.9357 35.4551 22.1447 35.8653 22.3459 36.2852C22.3967 36.3848 22.4357 36.4844 22.4865 36.586C22.5158 36.6563 22.6271 36.9258 22.5158 36.6563C22.6154 36.9063 22.715 37.1465 22.8049 37.3965C23.174 38.4063 23.465 39.4473 23.6545 40.5059C23.7053 40.7755 23.7443 41.045 23.7853 41.3165C23.7346 40.9669 23.7951 41.4259 23.8049 41.4669C23.8244 41.6075 23.8342 41.7364 23.8439 41.877C23.9045 42.4766 23.924 43.088 23.924 43.6876C23.924 44.4669 24.6135 45.2266 25.424 45.1876C26.2346 45.1485 26.924 44.5274 26.924 43.6876C26.9045 39.418 25.6037 35.1486 23.1135 31.6681C20.6232 28.1974 17.1935 25.5586 13.1935 24.0686C10.9239 23.2287 8.47276 22.8186 6.05296 22.8088C5.27366 22.8088 4.51391 23.4983 4.55296 24.3088C4.59007 25.1096 5.21116 25.801 6.05101 25.801L6.05098 25.8008Z" />
                  <path d="M6.05108 16.66C6.80108 16.66 7.55108 16.6892 8.29133 16.74C8.66047 16.7693 9.03158 16.8006 9.39093 16.8396C9.48077 16.8494 9.97103 16.91 9.67999 16.8689C9.87921 16.8982 10.0901 16.9295 10.2894 16.9588C11.7191 17.1893 13.1292 17.5193 14.5101 17.9588C15.2093 18.1795 15.9007 18.4295 16.5902 18.7088C16.6703 18.7381 16.7503 18.7791 16.8402 18.8084C16.8207 18.7986 16.6292 18.7185 16.7894 18.7889C16.9496 18.8592 17.1195 18.9295 17.2796 18.9998C17.6195 19.1502 17.9593 19.3201 18.2992 19.4803C19.5589 20.1111 20.7699 20.8299 21.93 21.6307C22.2191 21.8299 22.5003 22.0408 22.7796 22.2498C22.85 22.3006 22.9203 22.3592 22.9906 22.41C22.9398 22.3709 22.7699 22.2401 23.0003 22.4197C23.141 22.5291 23.2699 22.6404 23.4105 22.7498C23.9711 23.2108 24.5101 23.6795 25.0414 24.1795C26.0804 25.16 27.0218 26.2088 27.9222 27.3201C27.932 27.3299 28.0726 27.5096 27.9613 27.3807C27.8519 27.24 28.0218 27.4608 28.0413 27.49C28.1507 27.6307 28.2523 27.7693 28.3519 27.91C28.5726 28.2107 28.7816 28.5194 28.9925 28.8299C29.3831 29.41 29.7522 30.0096 30.1019 30.6189C30.4515 31.2283 30.7816 31.8592 31.0823 32.4881C31.2327 32.8084 31.3831 33.1287 31.5218 33.4588C31.5413 33.5095 31.6312 33.7185 31.5316 33.4685C31.5609 33.5486 31.6019 33.6287 31.6312 33.7185C31.7015 33.8787 31.762 34.0486 31.8304 34.2185C32.4202 35.7478 32.8812 37.3279 33.2112 38.9392C33.2913 39.3396 33.3616 39.7498 33.4319 40.1502C33.4417 40.2303 33.5316 40.8103 33.4827 40.4998C33.512 40.7107 33.5335 40.91 33.553 41.1189C33.6429 41.9783 33.7034 42.8299 33.723 43.6892C33.7425 44.4685 34.4027 45.2283 35.223 45.1892C36.0238 45.1502 36.7425 44.5291 36.723 43.6892C36.5726 37.4902 34.5726 31.3687 30.893 26.3592C27.2524 21.3885 22.2425 17.5992 16.4535 15.4902C13.1332 14.2793 9.58446 13.6894 6.05296 13.6797C5.27366 13.6797 4.51391 14.3691 4.55296 15.1797C4.59007 15.9707 5.21116 16.6504 6.05101 16.6601L6.05108 16.66Z" />
                  <path d="M6.05096 7.30088C7.08026 7.30088 8.10176 7.33994 9.13106 7.42002C9.592 7.45908 10.051 7.5001 10.5119 7.56064C10.6213 7.57041 10.7424 7.58994 10.8518 7.59971C10.9221 7.60947 11.2326 7.65049 10.9318 7.60947C11.2014 7.64854 11.4709 7.68955 11.7424 7.72861C13.6623 8.03916 15.5529 8.49816 17.3929 9.09776C18.2835 9.38683 19.1624 9.70716 20.0237 10.0685C20.053 10.0782 20.4632 10.2579 20.1546 10.1192C20.2347 10.1485 20.3148 10.1896 20.3948 10.2286C20.5941 10.3185 20.7952 10.4083 21.0042 10.4981C21.4437 10.6974 21.8851 10.9083 22.3148 11.129C24.0042 11.9786 25.6253 12.9591 27.1644 14.0489C27.5238 14.2989 27.8753 14.5586 28.2249 14.8282C28.5745 15.088 27.9945 14.6485 28.3343 14.918C28.4242 14.9884 28.5042 15.0587 28.5941 15.1173C28.7933 15.2774 29.0042 15.4473 29.2035 15.6173C29.9242 16.2169 30.6234 16.8477 31.3031 17.4981C31.9632 18.1387 32.6039 18.7989 33.2132 19.4786C33.5023 19.8086 33.7933 20.1387 34.0726 20.4688C34.223 20.6485 34.3832 20.838 34.5336 21.0294C34.6039 21.1192 34.6742 21.1993 34.7328 21.2891C34.7836 21.3594 34.8422 21.4298 34.8929 21.5001C34.8031 21.3907 34.7933 21.3692 34.8636 21.461C35.9945 22.9415 37.014 24.5001 37.9242 26.1309C38.3851 26.961 38.8148 27.8106 39.2035 28.67C39.3031 28.8907 39.4027 29.1094 39.5043 29.3399C39.5433 29.4199 39.5746 29.5 39.6136 29.5801C39.4828 29.2695 39.6527 29.6797 39.6644 29.711C39.8539 30.1602 40.0238 30.6211 40.1937 31.0801C40.934 33.1094 41.5043 35.1992 41.8832 37.3201C41.934 37.5896 41.973 37.8592 42.0238 38.1307C42.0336 38.2205 42.0531 38.3103 42.0629 38.4002C42.0726 38.4607 42.1527 39.0193 42.1019 38.6795C42.1722 39.2303 42.2328 39.7791 42.2816 40.3299C42.3812 41.449 42.4222 42.5603 42.432 43.6795C42.432 44.4588 43.1215 45.2185 43.932 45.1795C44.7426 45.1404 45.432 44.5193 45.432 43.6795C45.4222 35.58 42.9125 27.539 38.2015 20.9395C33.5511 14.4395 27.0705 9.46098 19.5805 6.69948C15.27 5.09988 10.651 4.31083 6.051 4.30103C5.2717 4.30103 4.51195 4.99048 4.551 5.80103C4.59007 6.61938 5.21115 7.30103 6.051 7.30103L6.05096 7.30088Z" />
                  <path d="M15.0389 39.711C15.0389 42.1895 13.0291 44.1993 10.5506 44.1993C8.0701 44.1993 6.0603 42.1895 6.0603 39.711C6.0603 37.2305 8.07005 35.2207 10.5506 35.2207C13.0291 35.2207 15.0389 37.2305 15.0389 39.711Z" />
                  <path d="M14.5509 39.7108C14.5216 41.3807 13.4904 42.9217 11.8908 43.4803C10.3107 44.0311 8.53139 43.5409 7.46109 42.2499C6.40054 40.9608 6.26189 39.0897 7.12125 37.66C7.97085 36.2401 9.6818 35.4608 11.3009 35.7909C13.1896 36.1698 14.5197 37.8104 14.5509 39.7108C14.5607 40.3514 15.5607 40.3514 15.5509 39.7108C15.5217 37.6209 14.2404 35.7713 12.2814 35.0311C10.3322 34.2908 8.0314 34.9217 6.7109 36.5213C5.3808 38.1307 5.1816 40.4705 6.26168 42.2713C7.34178 44.0721 9.45113 44.992 11.5117 44.6112C13.8515 44.1815 15.5117 42.0506 15.5507 39.7108C15.5605 39.0702 14.5605 39.0702 14.5507 39.7108H14.5509Z" />
                </svg>
              </button>
              <button role="tab"
                aria-selected="false"
                aria-controls="videos-media"
                id="videos-media"
                class={this.activeTab === 'videos-media' ? 'active' : ''}
                onClick={this.activateTab}>
                <span>
                  Videos and Media
                </span>
                <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
                  <path d="M25 50C18.369 50 12.01 47.3652 7.3225 42.6775C2.635 37.9898 0 31.6305 0 25C0 18.3695 2.63475 12.01 7.3225 7.3225C12.0103 2.635 18.3695 0 25 0C31.6305 0 37.99 2.63475 42.6775 7.3225C47.365 12.0103 50 18.3695 50 25C50 31.6305 47.3652 37.99 42.6775 42.6775C37.9898 47.365 31.6305 50 25 50ZM25 2.8575C19.127 2.8575 13.496 5.18955 9.342 9.342C5.18965 13.4963 2.8575 19.127 2.8575 25C2.8575 30.873 5.18955 36.504 9.342 40.658C13.4963 44.8104 19.127 47.1425 25 47.1425C30.873 47.1425 36.504 44.8105 40.658 40.658C44.8104 36.5037 47.1425 30.873 47.1425 25C47.1425 19.127 44.8105 13.496 40.658 9.342C36.5037 5.18965 30.873 2.8575 25 2.8575Z" />
                  <path d="M20.7149 36.0002C20.086 35.9983 19.4708 35.8303 18.9278 35.5139C17.8165 34.885 17.1329 33.6995 17.1427 32.4221V17.5781C17.1427 16.3027 17.8243 15.123 18.9278 14.4863C20.0333 13.8477 21.3946 13.8477 22.5001 14.4863L35.3576 21.9083V21.9064C36.463 22.545 37.1427 23.7247 37.1427 25.0001C37.1427 26.2755 36.463 27.4552 35.3576 28.0939L22.5001 35.5159V35.5139C21.9571 35.8303 21.3419 35.9983 20.7149 36.0002V36.0002ZM20.7149 16.8577C20.588 16.8597 20.4649 16.8929 20.3575 16.9574C20.1349 17.0863 19.9981 17.3226 20.0001 17.5785V32.4225C19.9981 32.6783 20.1349 32.9146 20.3575 33.0435C20.5782 33.1705 20.8497 33.1705 21.0724 33.0435L33.9299 25.6216H33.9279C34.1525 25.4946 34.2912 25.2583 34.2912 25.0005C34.2912 24.7426 34.1525 24.5063 33.9279 24.3794L21.0704 16.9574H21.0724C20.963 16.8929 20.8399 16.8597 20.7149 16.8577H20.7149Z" />
                </svg>
              </button>
              <button role="tab"
                aria-selected="true"
                aria-controls="third-party-packages"
                id="third-party"
                class={this.activeTab === 'third-party' ? 'active' : ''}
                onClick={this.activateTab}>
                <span>
                  3rd Party Packages
                </span>
                <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
                  <path d="M32.031 6.48438H18.531C16.6502 6.48438 15.1248 8.00978 15.1248 9.89062V21.8281C15.1248 22.7324 15.4841 23.5977 16.1228 24.2363C16.7615 24.875 17.6267 25.2344 18.531 25.2344H32.031C32.9353 25.2344 33.8006 24.875 34.4392 24.2363C35.0779 23.5976 35.4373 22.7324 35.4373 21.8281V9.89062C35.4373 8.00978 33.9119 6.48438 32.031 6.48438ZM25.281 18.9844C24.0174 18.9844 22.8767 18.2227 22.3943 17.0547C21.9099 15.8867 22.1775 14.543 23.0721 13.6504C23.9647 12.7558 25.3084 12.4883 26.4764 12.9726C27.6443 13.455 28.4061 14.5957 28.4061 15.8593C28.4061 16.6874 28.076 17.4824 27.4901 18.0683C26.9041 18.6543 26.1092 18.9843 25.2811 18.9843L25.281 18.9844Z" />
                  <path d="M6.8125 47.1094H20.3125C21.2168 47.1094 22.082 46.75 22.7207 46.1113C23.3594 45.4727 23.7188 44.6074 23.7188 43.7031V31.7656C23.7188 29.8848 22.1933 28.3594 20.3125 28.3594H6.8125C4.93165 28.3594 3.40625 29.8848 3.40625 31.7656V43.7031C3.40625 45.584 4.93165 47.1094 6.8125 47.1094ZM10.0625 39.2969L12.7266 35.1016C12.9082 34.8125 13.2246 34.6367 13.5664 34.6367C13.9082 34.6367 14.2246 34.8125 14.4062 35.1016L17.0703 39.2969C17.2851 39.6035 17.3105 40.0059 17.1328 40.3359C16.957 40.666 16.6094 40.8691 16.2344 40.8594H10.9374C10.5565 40.8848 10.1932 40.6875 10.0077 40.3535C9.82015 40.0195 9.84163 39.6094 10.0623 39.2969H10.0625Z" />
                  <path d="M43.75 28.3594H30.25C28.3692 28.3594 26.8438 29.8848 26.8438 31.7656V43.7031C26.8438 44.6074 27.2031 45.4727 27.8418 46.1113C28.4805 46.75 29.3457 47.1094 30.25 47.1094H43.75C44.6543 47.1094 45.5195 46.75 46.1582 46.1113C46.7969 45.4727 47.1562 44.6074 47.1562 43.7031V31.7656C47.1562 29.8848 45.6308 28.3594 43.75 28.3594ZM40.125 39.5469C40.125 39.8945 39.9863 40.2285 39.7402 40.4746C39.4941 40.7207 39.1601 40.8594 38.8125 40.8594H35.1562C34.4316 40.8594 33.8437 40.2715 33.8437 39.5469V35.9375C33.8398 35.5859 33.9765 35.248 34.2226 35C34.4687 34.75 34.8047 34.6094 35.1562 34.6094H38.789C39.1445 34.6035 39.4863 34.7402 39.7382 34.9902C39.9902 35.2402 40.1289 35.582 40.125 35.9375L40.125 39.5469Z" />
                </svg>
              </button>
              <button role="tab"
                aria-selected="true"
                aria-controls="demos"
                id="demos"
                class={this.activeTab === 'demos' ? 'active' : ''}
                onClick={this.activateTab}>
                <span>
                  Demos
                </span>
                <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
                  <path d="M45.5156 38.0725H4.46655V13C4.46655 10.9297 6.1443 9.25 8.21655 9.25H41.7656C43.8378 9.25 45.5156 10.9297 45.5156 13V38.0725ZM44.0156 36.5725V13C44.0156 11.7578 43.0097 10.75 41.7656 10.75H8.21655C6.9724 10.75 5.96655 11.7578 5.96655 13V36.5725H44.0156Z" />
                  <path d="M2.82027 38.0723C3.0273 38.7539 3.66207 39.25 4.41012 39.25H45.5721C46.3202 39.25 46.9549 38.7539 47.162 38.0723H2.82027ZM48.7128 37.2383C48.7264 37.3555 48.7323 37.4726 48.7323 37.5898C48.7323 39.334 47.3163 40.75 45.5722 40.75H4.41015C2.666 40.75 1.25 39.334 1.25 37.5898C1.25 37.4726 1.25586 37.3555 1.26953 37.2383C1.31055 36.8594 1.63281 36.5723 2.01563 36.5723H47.9666C48.3494 36.5723 48.6717 36.8594 48.7127 37.2383H48.7128Z" />
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M21.4004 22.9434L24.0762 25.916L22.961 26.9199L20.2852 23.9473L21.4004 22.9434Z" />
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M28.2635 20.7871L22.1345 25.9296L23.0994 27.0781L29.2284 21.9356L28.2635 20.7871Z" />
                </svg>
              </button>
            </div>
            <div class="tabpanel" tabindex="0"
              role="tabpanel"
              id="community-articles-blogs"
              aria-labelledby="article-blogs"
              hidden={this.activeTab !== 'article-blogs'}>
              <section class="measure-lg">
                <header>
                  <h2>Community Articles/Blogs</h2>
                  <p>Disclaimer: these articles are community-created, and might contain inaccurate, or outdated information and code snippets.</p>
                </header>
                <ul class="list--unstyled">
                  {
                    LINKS.BLOGS.filter(this.filterLinks).map(link => {
                      return (<li><a target="_blank" rel="noopener" href={link.url}>{link.title}</a></li>);
                    })
                  }
                </ul>
              </section>
            </div>
            <div class="tabpanel" tabindex="0"
              role="tabpanel"
              id="videos-media"
              aria-labelledby="videos-media"
              hidden={this.activeTab !== 'videos-media'}>
              <section class="measure-lg">
                <header>
                  <h2>Videos</h2>
                </header>
                <ul class="list--unstyled">
                  {LINKS.VIDEOS.filter(this.filterLinks).map(link => {
                    return (<li><a target="_blank" rel="noopener" href={link.url}>{link.title}</a></li>);
                  })}
                </ul>
              </section>
            </div>
            <div class="tabpanel" tabindex="0"
              role="tabpanel"
              id="third-party-packages"
              aria-labelledby="third-party"
              hidden={this.activeTab !== 'third-party'}>
              <section class="measure-lg">
                <header>
                  <h2>3rd Party Components, Templates and Tools</h2>
                </header>
                <ul class="list--unstyled">
                  {LINKS.COMPONENTS.filter(this.filterLinks).map(link => {
                    return (<li><a target="_blank" rel="noopener" href={link.url}>{link.title}</a></li>);
                  })}
                  {LINKS.TEMPLATES.filter(this.filterLinks).map(link => {
                    return (<li><a target="_blank" rel="noopener" href={link.url}>{link.title}</a></li>);
                  })}
                  {LINKS.TOOLS.filter(this.filterLinks).map(link => {
                    return (<li><a target="_blank" rel="noopener" href={link.url}>{link.title}</a></li>);
                  })}
                </ul>
              </section>
            </div>
            <div class="tabpanel" tabindex="0"
              role="tabpanel"
              id="demos"
              aria-labelledby="demos"
              hidden={this.activeTab !== 'demos'}>
              <section>
                <header>
                  <h2>Demos</h2>
                  <p>Demos of apps built using Stencil and Ionic</p>
                </header>
                <div class="demo-card-list">
                  {LINKS.DEMOS.filter(this.filterLinks).map(demo => {
                    return (
                      <demo-card
                        name={demo.title}
                        description={demo.description}
                        imgPath={demo.imgPath}
                        demoUrl={demo.demoUrl}
                        sourceUrl={demo.sourceUrl}></demo-card>
                    );
                  })}
                </div>
              </section>
            </div>
          </div>
        </section>

        <section class="measure-lg">
          <h2>Present Stencil</h2>
          <div class="slide-wrapper screenshot">
            <iframe src="https://ionic-team.github.io/stencil-present/" title="Present Stencil" loading="lazy"></iframe>
          </div>
          <p>
            A forkable presentation for your next meetup or conference
            talk on Stencil.
          Built with <a href="https://github.com/hakimel/reveal.js">Reveal.js</a>
          </p>
          <a target="_blank" rel="noopener" href="https://ionic-team.github.io/stencil-present/">Stencil Presentation</a>
          <br />
          <a target="_blank" rel="noopener" href="https://github.com/ionic-team/stencil-present/">Source</a>
        </section>
      </div>
    ];
  }
}

const LINKS = {
  TEMPLATES: [
    { title: 'Official Stencil App Starter Project', url: 'https://github.com/ionic-team/stencil-app-starter' },
    { title: 'Official Stencil Component Starter Project', url: 'https://github.com/ionic-team/stencil-component-starter' },
    { title: 'Angular Stencil: use Stencil-built components in Angular', url: 'https://github.com/seveves/angular-stencil' }
  ],
  COMPONENTS: [
    { title: 'Stencil Router', url: 'https://github.com/ionic-team/stencil-router/wiki' },
    { title: 'Stencil Card Component', url: 'https://github.com/henriquecustodia/stencil-card-app' },
    { title: 'st-image: lazy loaded images', url: 'https://github.com/jgw96/st-img' },
    { title: 'st-payment: Stencil Payment API Component', url: 'https://github.com/Fdom92/stencil-payment' },
    { title: 'st-fetch: A simple component for performing http fetch calls', url: 'https://github.com/Fdom92/stencil-fetch' },
    { title: 'web-photo-filter: Use webGL for amazing instagram like filters', url: 'https://github.com/peterpeterparker/web-photo-filter' },
    { title: 'stencil-flip-images: Awesome animated image gallery', url: 'https://github.com/jepiqueau/stencil-flip-images' },
    { title: 'd3-stencil: Charts built with D3 and Stencil. Framework-agnostic, simple.', url: 'https://d3-stencil.dev' },
    { title: 'Animatable: Animate any HTML Element using Web Animations API in a declarative way! 💅', url: 'https://proyecto26.github.io/animatable-component' },
    { title: 'IonPhaser: A web component to integrate Phaser Framework with Angular, React, Vue, etc 🎮', url: 'https://github.com/proyecto26/ion-phaser' },
    { title: 'Stace Editor: 📖 A web component wrapper for Ace Editor, using Stencil + brace', url: 'https://github.com/jeanbenitez/stace-editor' }
  ],
  TOOLS: [
    { title: 'xLayers Lite', url: 'https://github.com/xlayers/xlayers-lite' },
    { title: 'yo Stencil: A yeoman generator for Stencil', url: 'https://github.com/AkashGutha/generator-stencil' },
    { title: 'Stencil Snippets: A Stencil snippets package for VS Code', url: 'https://marketplace.visualstudio.com/items?itemName=fdom.stencil-snippets' },
    { title: 'tslint-stencil: TSLint rules for Stencil components', url: 'https://www.npmjs.com/package/tslint-stencil' }
  ],
  BLOGS: [
    { title: 'Creating a Progressive Web App with StencilJS and Workbox', url: 'https://julienrenaux.fr/2019/11/25/creating-progressive-web-app-pwa-serviceworker-stenciljs-workbox/' },
    { title: 'How to Build Reusable Web Components Using Stencil.js', url: 'https://morioh.com/p/f2eefe79f2c9' },
    { title: 'Using RxJS Observables with StencilJS and Ionic', url: 'https://www.joshmorony.com/using-observables-with-stencil-js-and-ionic/' },
    { title: 'Apple Cements the Unlikely Rise of Web Components', url: 'https://hackernoon.com/apple-cements-the-unlikely-rise-of-web-components-6b1d3g1t' },
    { title: 'Create a Circle Progress Web Component with Conic Gradients in StencilJS', url: 'https://www.joshmorony.com/create-a-circle-progress-web-component-with-conic-gradients-in-stencil-js/' },
    { title: 'The Basics of Unit Testing in StencilJS', url: 'https://www.joshmorony.com/the-basics-of-unit-testing-in-stencil-js/' },
    { title: 'Building a Notepad Application from Scratch with Ionic (StencilJS)', url: 'https://www.joshmorony.com/building-a-notepad-application-from-scratch-with-ionic-and-stencil-js/' },
    { title: 'Publishing and Integrating a StencilJS Web Component in React', url: 'https://medium.com/stencil-tricks/publishing-and-integrating-a-stenciljs-reusable-web-component-in-react-66f852582f6b' },
    { title: 'Creating a Reusable Web Component with StencilJS', url: 'https://medium.com/stencil-tricks/creating-reusable-a-reusable-web-component-with-stenciljs-b2842af54c51' },
    { title: 'Build Components Not Walls', url: 'https://jagreehal.github.io/build-components-not-walls-slides/index.html#/' },
    { title: 'Basic and Advanced Tab Navigation with Ionic & StencilJS', url: 'https://www.joshmorony.com/basic-and-advanced-tab-navigation-with-ionic-and-stencil-js/' },
    { title: 'Routing with ion-router, ion-tabs, and how to pass params to tab pages', url: 'https://dev.to/cm/stencil-routing-with-ion-router-ion-tabs-and-how-to-pass-params-to-tab-pages-without-using-angular-4lfl' },
    { title: 'An Introduction into Stencil.js', url: 'https://gabrieltanner.org/blog/stencil-js-introduction' },
    { title: 'Using your StencilJS Design System in Framer X', url: 'https://medium.com/stencil-tricks/using-your-stenciljs-design-system-in-framer-x-2e7479fd22c4' },
    { title: 'Using a Stencil-built component in Angular', url: "https://github.com/ospatil/ng-components-integration" },
    { title: 'Create your First Stencil Component', url: 'https://coryrylan.com/blog/create-your-first-web-component-with-stencil-js' },
    { title: 'Getting Started with Stencil', url: 'https://alligator.io/stencil/getting-started/' },
    { title: "Stencil.js: It's finally time for vanilla web components!", url: 'https://medium.com/@sinedied/stencil-js-its-finally-time-for-vanilla-web-components-927d26b573e1' },
    { title: "Stencil with MobX", url: 'https://github.com/aaronksaunders/stencil-mobx' },
    { title: "Webkomponenten mit Stencil – Ein erster Überblick (in German)", url: 'https://www.datacodedesign.de/webkomponenten-mit-stencil-ein-erster-ueberblick/' },
    { title: 'Stencil’e Giriş (in Turkish)', url: 'https://medium.com/t%C3%BCrkiye/stencile-giri%C5%9F-41e90e37595d' },
    { title: 'Stencil’de Bileşenler Arası Haberleşme (in Turkish)', url: 'https://medium.com/t%C3%BCrkiye/stencilde-bilesenler-arasi-haberlesme-52523a470fa9' },
    { title: 'Stencil Bileşen Yaşam Döngüsü (in Turkish)', url: 'https://medium.com/@selcukkutuk/bilesen-yasam-dongusu-c53dc42c2384' },
    { title: 'Stencil Tricks - A collection of community-written articles on how to do awesome things in Stencil JS', url: 'https://medium.com/stencil-tricks' }
  ],
  VIDEOS: [
    { title: 'A Review of Stencil Web Components', url: 'https://www.youtube.com/watch?v=_aQvoS7AyTg' },
    { title: 'Stencil - Getting Started (video)', url: "https://www.youtube.com/watch?v=MqMYaT1GlWY" },
    { title: 'Announcing Stencil.js', url: 'https://www.youtube.com/watch?v=UfD-k7aHkQE' },
  ],
  DEMOS: [
    {
      title: 'Stenciljs.com',
      description: 'Yep, this site is also built with Stencil!',
      imgPath: '/assets/img/demos/demo-stenciljs',
      demoUrl: '/',
      sourceUrl: 'https://github.com/ionic-team/stencil-site',
    },
    {
      title: 'IonicHN',
      description: 'Hacker News PWA built with @stencil/core and @ionic/core',
      imgPath: '/assets/img/demos/demo-ionichn',
      demoUrl: 'https://corehacker-10883.firebaseapp.com/',
      sourceUrl: 'https://github.com/ionic-team/ionic-stencil-hn-app'
    },
    {
      title: 'Stencil Fiber demo',
      description: 'This showcases the runtime performance of stencil using our async rendering',
      imgPath: '/assets/img/demos/demo-fiber',
      demoUrl: 'https://stencil-fiber-demo.firebaseapp.com/',
      sourceUrl: 'https://github.com/ionic-team/stencil-fiber-demo'
    },
    {
      title: 'IonicBeer',
      description: 'Beer PWA built with @stencil/core and @ionic/core',
      imgPath: '/assets/img/demos/demo-ionicbeer',
      demoUrl: 'https://stencilbeer.firebaseapp.com/',
      sourceUrl: 'https://github.com/jgw96/stencil-beer'
    },
    {
      title: 'InstaMusic',
      description: 'A full featured music player built with @stencil/core and @ionic/core',
      imgPath: '/assets/img/demos/demo-instamusic',
      demoUrl: 'https://instamusic-c15fe.firebaseapp.com/',
      sourceUrl: 'https://github.com/jgw96/instamusic'
    }
  ]
};
