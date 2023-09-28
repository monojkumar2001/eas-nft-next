import Image from 'next/image';
import Link from 'next/link';

function FAQItem({ item }) {
  return (
    <div>
      {/* <h2>{item.page}</h2> */}
      {/* <div className="knowledge-faq-list-item" key={item.id}>
        <span>
          <Image width={13} height={16} src='/images/knowledge-base/faq-file-icon.svg' alt="file icon" />
        </span>
        <Link>{question}</Link>
      </div> */}
    </div>
  );
}

export async function getStaticPaths() {
  // Fetch a list of all FAQ IDs from your API here
  const response = await fetch('https://admin.accurentvc.com/api/page');
  const { data } = await response.json();

  // Generate paths for each FAQ item
  const paths = data.flatMap((page) =>
    page.faq.map((item) => ({
      params: { id: item.id.toString() }, // Assuming 'id' is a string
    }))
  );

  console.log('paths',paths)

  return {
    paths,
    fallback: false, // Set to 'true' for dynamic routes
  };
}

export async function getStaticProps({ params }) {
  // Fetch the FAQ item with the specified 'id' from your API
  const response = await fetch(`https://admin.accurentvc.com/api/faq/${params.id}`);
  const item = await response.json();

  return {
    props: {
      item,
    },
  };
}

export default FAQItem;