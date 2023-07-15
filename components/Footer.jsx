import { FaWhatsapp, FaInstagram, FaTwitter } from 'react-icons/fa';


const Footer = () => {
  const footerItems = [
    {
      label: 'company',
      links: [
        {
          label: 'about',
          href: '#',
        },
        {
          label: 'contact us',
          href: '#',
        },
        {
          label: 'support',
          href: '#',
        },
        {
          label: 'careers',
          href: '#',
        },
      ],
    },
    {
      label: 'quick links',
      links: [
        {
          label: 'share location',
          href: '#',
        },
        {
          label: 'orders tracking',
          href: '#',
        },
        {
          label: 'size guide',
          href: '#',
        },
        {
          label: 'FAQs',
          href: '#',
        },
      ],
    },
    {
      label: 'legal',
      links: [
        {
          label: 'terms & condition',
          href: '#',
        },
        {
          label: 'privacy policy',
          href: '#',
        },
      ],
    },
  ];


  const socialMediaList = [
    {
      Icon: FaWhatsapp,
      href: 'https://api.whatsapp.com/send/?phone=7645046696&text&type=phone_number&app_absent=0',
    },
    {
      Icon: FaInstagram,
      href: 'https://www.instagram.com/manojrajak7479/',
    },
    {
      Icon: FaTwitter,
      href: '/twitter',
    },
  ];

  return (
    <footer
      className={`
		full-bleed bg-black shadow-black shadow-[0_0_0_100vmax] dark:bg-gray-900 dark:shadow-gray-900
		text-white max-lg:text-center
	`}
    >
      <div className={`flex gap-12 py-12 max-lg:flex-col max-lg:items-center`}>
        <div className="flex flex-col gap-4">
          <h6 className="text-5xl">xugaadu.in</h6>
          <span className="text-gray-400 max-w-xs">
					Brace Yourself for the Launch of Our Store, Stay Tuned.
          </span>

          <ul className="flex gap-6 max-lg:mx-auto">
            {socialMediaList.map((item, index) => (
              <li key={index}>
                <a
                  className="block text-gray-200 hover:text-white hover:-translate-y-0.5 transition-all"
                  href={item.href}
                  rel="noreferrer"
                >
                  <item.Icon className="text-2xl fill-current" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex max-lg:flex-wrap gap-28 justify-end max-lg:justify-center flex-1 capitalize">
          {footerItems.map((item) => (
            <div key={item.label}>
              <span>{item.label}</span>
              <ul className="flex flex-col gap-4 mt-4">
                {item.links.map((link) => (
                  <li key={link.label}>
                    <a
                      className="text-gray-400 hover:text-gray-200 transition-colors"
                      href={link.href}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* <p className={`text-gray-400 text-sm text-center py-4`}>
        <span> Design from </span>
        <a
          target="_blank"
          className="hover:text-gray-200 underline transition-colors"
          href="https://www.uistore.design/items/shopping-free-landing-page-for-figma/"
          rel="noreferrer"
        >
          uistore
        </a>
      </p> */}
    </footer>
  );
};

export default Footer;
