import { GitHubCalendar } from 'react-github-calendar';
import '@rocktimsaikia/github-card';
export default function CodeContribute(){
    return(
       <section className="py-20 px-6 md:px-10 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold">
          GitHub Contributions
        </h2>

        <p className="mt-4 text-gray-400">
          My coding activity, commits, and open-source contributions.
        </p>
      </div>

      <div className="text-center py-20 px-6 md:px-10 max-w-7xl mx-auto">
          <github-card data-user="xGRIDev" data-theme="dark"></github-card>

      </div>

      <div className="mt-8 rounded-3xl bg-white/5 border border-white/10 p-8 backdrop-blur overflow-x-auto">
        <GitHubCalendar
          username="xGRIDev"
          blockSize={15}
          blockMargin={5}
          fontSize={14}
        />
      </div>
    </section>
    )
}