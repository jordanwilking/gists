//@ts-nocheck

export const getSampleGistFile = () => {
  return `func main() {

    ctx := context.Background()
  
    // trap Ctrl+C and call cancel on the context
    ctx, cancel := context.WithCancel(ctx)
    c := make(chan os.Signal, 1)
    signal.Notify(c, os.Interrupt)
    defer func() {
      signal.Stop(c)
      cancel()
    }()
    go func() {
      select {
      case <-c:
        cancel()
      case <-ctx.Done():
      }
    }()
    
    doSomethingAwesome(ctx)
  
  }`
}

export const getSampleGist = () => {
  return {
    data: [
      {
        url: 'https://api.github.com/gists/547a9749e71411ca30a8c73937c8dd79',
        forks_url:
          'https://api.github.com/gists/547a9749e71411ca30a8c73937c8dd79/forks',
        commits_url:
          'https://api.github.com/gists/547a9749e71411ca30a8c73937c8dd79/commits',
        id: '547a9749e71411ca30a8c73937c8dd79',
        node_id: 'MDQ6R2lzdDU0N2E5NzQ5ZTcxNDExY2EzMGE4YzczOTM3YzhkZDc5',
        git_pull_url:
          'https://gist.github.com/547a9749e71411ca30a8c73937c8dd79.git',
        git_push_url:
          'https://gist.github.com/547a9749e71411ca30a8c73937c8dd79.git',
        html_url: 'https://gist.github.com/547a9749e71411ca30a8c73937c8dd79',
        files: {
          'term_context.go': {
            filename: 'term_context.go',
            type: 'text/plain',
            language: 'Go',
            raw_url:
              'https://gist.githubusercontent.com/vsouza/547a9749e71411ca30a8c73937c8dd79/raw/5b7a70b36bcfae5e6ceb82b734938f6881c99f8a/term_context.go',
            size: 351,
          },
        },
        public: true,
        created_at: '2020-09-28T22:18:50Z',
        updated_at: '2020-09-28T22:18:51Z',
        description: 'Making Ctrl+C termination cancel the context.Context',
        comments: 0,
        user: null,
        comments_url:
          'https://api.github.com/gists/547a9749e71411ca30a8c73937c8dd79/comments',
        owner: {
          login: 'vsouza',
          id: 484656,
          node_id: 'MDQ6VXNlcjQ4NDY1Ng==',
          avatar_url: 'https://avatars.githubusercontent.com/u/484656?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/vsouza',
          html_url: 'https://github.com/vsouza',
          followers_url: 'https://api.github.com/users/vsouza/followers',
          following_url:
            'https://api.github.com/users/vsouza/following{/other_user}',
          gists_url: 'https://api.github.com/users/vsouza/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/vsouza/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/vsouza/subscriptions',
          organizations_url: 'https://api.github.com/users/vsouza/orgs',
          repos_url: 'https://api.github.com/users/vsouza/repos',
          events_url: 'https://api.github.com/users/vsouza/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/vsouza/received_events',
          type: 'User',
          site_admin: false,
        },
        truncated: false,
      },
      {
        url: 'https://api.github.com/gists/f95d9d2a5ec70c3f0502ed838a7f5944',
        forks_url:
          'https://api.github.com/gists/f95d9d2a5ec70c3f0502ed838a7f5944/forks',
        commits_url:
          'https://api.github.com/gists/f95d9d2a5ec70c3f0502ed838a7f5944/commits',
        id: 'f95d9d2a5ec70c3f0502ed838a7f5944',
        node_id: 'MDQ6R2lzdGY5NWQ5ZDJhNWVjNzBjM2YwNTAyZWQ4MzhhN2Y1OTQ0',
        git_pull_url:
          'https://gist.github.com/f95d9d2a5ec70c3f0502ed838a7f5944.git',
        git_push_url:
          'https://gist.github.com/f95d9d2a5ec70c3f0502ed838a7f5944.git',
        html_url: 'https://gist.github.com/f95d9d2a5ec70c3f0502ed838a7f5944',
        files: {
          'installing_cassandra.md': {
            filename: 'installing_cassandra.md',
            type: 'text/markdown',
            language: 'Markdown',
            raw_url:
              'https://gist.githubusercontent.com/vsouza/f95d9d2a5ec70c3f0502ed838a7f5944/raw/c24e906f9d61f7b480ac857cccb91c17bde8fbb8/installing_cassandra.md',
            size: 1843,
          },
        },
        public: true,
        created_at: '2020-07-30T20:53:13Z',
        updated_at: '2020-07-30T20:53:14Z',
        description: 'Installing Cassandra on Mac OS X',
        comments: 0,
        user: null,
        comments_url:
          'https://api.github.com/gists/f95d9d2a5ec70c3f0502ed838a7f5944/comments',
        owner: {
          login: 'vsouza',
          id: 484656,
          node_id: 'MDQ6VXNlcjQ4NDY1Ng==',
          avatar_url: 'https://avatars.githubusercontent.com/u/484656?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/vsouza',
          html_url: 'https://github.com/vsouza',
          followers_url: 'https://api.github.com/users/vsouza/followers',
          following_url:
            'https://api.github.com/users/vsouza/following{/other_user}',
          gists_url: 'https://api.github.com/users/vsouza/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/vsouza/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/vsouza/subscriptions',
          organizations_url: 'https://api.github.com/users/vsouza/orgs',
          repos_url: 'https://api.github.com/users/vsouza/repos',
          events_url: 'https://api.github.com/users/vsouza/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/vsouza/received_events',
          type: 'User',
          site_admin: false,
        },
        truncated: false,
      },
      {
        url: 'https://api.github.com/gists/d4d8edc96cacb70f73bb149c4e36c542',
        forks_url:
          'https://api.github.com/gists/d4d8edc96cacb70f73bb149c4e36c542/forks',
        commits_url:
          'https://api.github.com/gists/d4d8edc96cacb70f73bb149c4e36c542/commits',
        id: 'd4d8edc96cacb70f73bb149c4e36c542',
        node_id: 'MDQ6R2lzdGQ0ZDhlZGM5NmNhY2I3MGY3M2JiMTQ5YzRlMzZjNTQy',
        git_pull_url:
          'https://gist.github.com/d4d8edc96cacb70f73bb149c4e36c542.git',
        git_push_url:
          'https://gist.github.com/d4d8edc96cacb70f73bb149c4e36c542.git',
        html_url: 'https://gist.github.com/d4d8edc96cacb70f73bb149c4e36c542',
        files: {
          'main.go': {
            filename: 'main.go',
            type: 'text/plain',
            language: 'Go',
            raw_url:
              'https://gist.githubusercontent.com/vsouza/d4d8edc96cacb70f73bb149c4e36c542/raw/49568833a509ef3c0c4aa10c024a52eed041d0b7/main.go',
            size: 375,
          },
          'myserver.go': {
            filename: 'myserver.go',
            type: 'text/plain',
            language: 'Go',
            raw_url:
              'https://gist.githubusercontent.com/vsouza/d4d8edc96cacb70f73bb149c4e36c542/raw/040fff12aabb8a69153a5ec68cb8bf63aaa61eae/myserver.go',
            size: 291,
          },
          'myserver_test.go': {
            filename: 'myserver_test.go',
            type: 'text/plain',
            language: 'Go',
            raw_url:
              'https://gist.githubusercontent.com/vsouza/d4d8edc96cacb70f73bb149c4e36c542/raw/47d8573a0c822f1d901ff605a6321ad65b356c23/myserver_test.go',
            size: 648,
          },
        },
        public: true,
        created_at: '2018-05-27T22:58:17Z',
        updated_at: '2018-05-27T22:58:17Z',
        description:
          'Example of testing Go HTTP servers using httptest.Server.',
        comments: 0,
        user: null,
        comments_url:
          'https://api.github.com/gists/d4d8edc96cacb70f73bb149c4e36c542/comments',
        owner: {
          login: 'vsouza',
          id: 484656,
          node_id: 'MDQ6VXNlcjQ4NDY1Ng==',
          avatar_url: 'https://avatars.githubusercontent.com/u/484656?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/vsouza',
          html_url: 'https://github.com/vsouza',
          followers_url: 'https://api.github.com/users/vsouza/followers',
          following_url:
            'https://api.github.com/users/vsouza/following{/other_user}',
          gists_url: 'https://api.github.com/users/vsouza/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/vsouza/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/vsouza/subscriptions',
          organizations_url: 'https://api.github.com/users/vsouza/orgs',
          repos_url: 'https://api.github.com/users/vsouza/repos',
          events_url: 'https://api.github.com/users/vsouza/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/vsouza/received_events',
          type: 'User',
          site_admin: false,
        },
        truncated: false,
      },
      {
        url: 'https://api.github.com/gists/cc16d0af73ebb1ac4e175ce61f908a04',
        forks_url:
          'https://api.github.com/gists/cc16d0af73ebb1ac4e175ce61f908a04/forks',
        commits_url:
          'https://api.github.com/gists/cc16d0af73ebb1ac4e175ce61f908a04/commits',
        id: 'cc16d0af73ebb1ac4e175ce61f908a04',
        node_id: 'MDQ6R2lzdGNjMTZkMGFmNzNlYmIxYWM0ZTE3NWNlNjFmOTA4YTA0',
        git_pull_url:
          'https://gist.github.com/cc16d0af73ebb1ac4e175ce61f908a04.git',
        git_push_url:
          'https://gist.github.com/cc16d0af73ebb1ac4e175ce61f908a04.git',
        html_url: 'https://gist.github.com/cc16d0af73ebb1ac4e175ce61f908a04',
        files: {
          'gistfile1.md': {
            filename: 'gistfile1.md',
            type: 'text/markdown',
            language: 'Markdown',
            raw_url:
              'https://gist.githubusercontent.com/vsouza/cc16d0af73ebb1ac4e175ce61f908a04/raw/3e951c7644a8fac64f8dd10004eaac58bb0dea2e/gistfile1.md',
            size: 9023,
          },
        },
        public: true,
        created_at: '2018-01-02T16:15:03Z',
        updated_at: '2018-01-02T16:15:04Z',
        description: 'Git/GitHub branching standards & conventions',
        comments: 0,
        user: null,
        comments_url:
          'https://api.github.com/gists/cc16d0af73ebb1ac4e175ce61f908a04/comments',
        owner: {
          login: 'vsouza',
          id: 484656,
          node_id: 'MDQ6VXNlcjQ4NDY1Ng==',
          avatar_url: 'https://avatars.githubusercontent.com/u/484656?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/vsouza',
          html_url: 'https://github.com/vsouza',
          followers_url: 'https://api.github.com/users/vsouza/followers',
          following_url:
            'https://api.github.com/users/vsouza/following{/other_user}',
          gists_url: 'https://api.github.com/users/vsouza/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/vsouza/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/vsouza/subscriptions',
          organizations_url: 'https://api.github.com/users/vsouza/orgs',
          repos_url: 'https://api.github.com/users/vsouza/repos',
          events_url: 'https://api.github.com/users/vsouza/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/vsouza/received_events',
          type: 'User',
          site_admin: false,
        },
        truncated: false,
      },
      {
        url: 'https://api.github.com/gists/2f113fa4b68b8e4a64e77dc50319ee38',
        forks_url:
          'https://api.github.com/gists/2f113fa4b68b8e4a64e77dc50319ee38/forks',
        commits_url:
          'https://api.github.com/gists/2f113fa4b68b8e4a64e77dc50319ee38/commits',
        id: '2f113fa4b68b8e4a64e77dc50319ee38',
        node_id: 'MDQ6R2lzdDJmMTEzZmE0YjY4YjhlNGE2NGU3N2RjNTAzMTllZTM4',
        git_pull_url:
          'https://gist.github.com/2f113fa4b68b8e4a64e77dc50319ee38.git',
        git_push_url:
          'https://gist.github.com/2f113fa4b68b8e4a64e77dc50319ee38.git',
        html_url: 'https://gist.github.com/2f113fa4b68b8e4a64e77dc50319ee38',
        files: {
          'start_streamming_spark.py': {
            filename: 'start_streamming_spark.py',
            type: 'application/x-python',
            language: 'Python',
            raw_url:
              'https://gist.githubusercontent.com/vsouza/2f113fa4b68b8e4a64e77dc50319ee38/raw/f68e3957c74716e8da03dd952f1f9e354397f3ff/start_streamming_spark.py',
            size: 105,
          },
        },
        public: true,
        created_at: '2016-10-05T02:52:20Z',
        updated_at: '2016-10-05T02:52:20Z',
        description: '',
        comments: 0,
        user: null,
        comments_url:
          'https://api.github.com/gists/2f113fa4b68b8e4a64e77dc50319ee38/comments',
        owner: {
          login: 'vsouza',
          id: 484656,
          node_id: 'MDQ6VXNlcjQ4NDY1Ng==',
          avatar_url: 'https://avatars.githubusercontent.com/u/484656?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/vsouza',
          html_url: 'https://github.com/vsouza',
          followers_url: 'https://api.github.com/users/vsouza/followers',
          following_url:
            'https://api.github.com/users/vsouza/following{/other_user}',
          gists_url: 'https://api.github.com/users/vsouza/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/vsouza/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/vsouza/subscriptions',
          organizations_url: 'https://api.github.com/users/vsouza/orgs',
          repos_url: 'https://api.github.com/users/vsouza/repos',
          events_url: 'https://api.github.com/users/vsouza/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/vsouza/received_events',
          type: 'User',
          site_admin: false,
        },
        truncated: false,
      },
      {
        url: 'https://api.github.com/gists/03d092905dee189dc7df9ab76fe88123',
        forks_url:
          'https://api.github.com/gists/03d092905dee189dc7df9ab76fe88123/forks',
        commits_url:
          'https://api.github.com/gists/03d092905dee189dc7df9ab76fe88123/commits',
        id: '03d092905dee189dc7df9ab76fe88123',
        node_id: 'MDQ6R2lzdDAzZDA5MjkwNWRlZTE4OWRjN2RmOWFiNzZmZTg4MTIz',
        git_pull_url:
          'https://gist.github.com/03d092905dee189dc7df9ab76fe88123.git',
        git_push_url:
          'https://gist.github.com/03d092905dee189dc7df9ab76fe88123.git',
        html_url: 'https://gist.github.com/03d092905dee189dc7df9ab76fe88123',
        files: {
          'spark_to_redshift.py': {
            filename: 'spark_to_redshift.py',
            type: 'application/x-python',
            language: 'Python',
            raw_url:
              'https://gist.githubusercontent.com/vsouza/03d092905dee189dc7df9ab76fe88123/raw/75725eca313f8b41e951c8e49925134d762c4f99/spark_to_redshift.py',
            size: 1050,
          },
        },
        public: true,
        created_at: '2016-10-05T02:50:32Z',
        updated_at: '2016-10-05T02:50:53Z',
        description: '',
        comments: 0,
        user: null,
        comments_url:
          'https://api.github.com/gists/03d092905dee189dc7df9ab76fe88123/comments',
        owner: {
          login: 'vsouza',
          id: 484656,
          node_id: 'MDQ6VXNlcjQ4NDY1Ng==',
          avatar_url: 'https://avatars.githubusercontent.com/u/484656?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/vsouza',
          html_url: 'https://github.com/vsouza',
          followers_url: 'https://api.github.com/users/vsouza/followers',
          following_url:
            'https://api.github.com/users/vsouza/following{/other_user}',
          gists_url: 'https://api.github.com/users/vsouza/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/vsouza/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/vsouza/subscriptions',
          organizations_url: 'https://api.github.com/users/vsouza/orgs',
          repos_url: 'https://api.github.com/users/vsouza/repos',
          events_url: 'https://api.github.com/users/vsouza/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/vsouza/received_events',
          type: 'User',
          site_admin: false,
        },
        truncated: false,
      },
      {
        url: 'https://api.github.com/gists/c822a545bb5df09c2d89463d25428bd5',
        forks_url:
          'https://api.github.com/gists/c822a545bb5df09c2d89463d25428bd5/forks',
        commits_url:
          'https://api.github.com/gists/c822a545bb5df09c2d89463d25428bd5/commits',
        id: 'c822a545bb5df09c2d89463d25428bd5',
        node_id: 'MDQ6R2lzdGM4MjJhNTQ1YmI1ZGYwOWMyZDg5NDYzZDI1NDI4YmQ1',
        git_pull_url:
          'https://gist.github.com/c822a545bb5df09c2d89463d25428bd5.git',
        git_push_url:
          'https://gist.github.com/c822a545bb5df09c2d89463d25428bd5.git',
        html_url: 'https://gist.github.com/c822a545bb5df09c2d89463d25428bd5',
        files: {
          's3_spark_output.py': {
            filename: 's3_spark_output.py',
            type: 'application/x-python',
            language: 'Python',
            raw_url:
              'https://gist.githubusercontent.com/vsouza/c822a545bb5df09c2d89463d25428bd5/raw/5c086d2b62e161e406170d1cb264a511a1fca3cf/s3_spark_output.py',
            size: 71,
          },
        },
        public: true,
        created_at: '2016-10-05T02:46:15Z',
        updated_at: '2016-10-05T02:46:15Z',
        description: '',
        comments: 0,
        user: null,
        comments_url:
          'https://api.github.com/gists/c822a545bb5df09c2d89463d25428bd5/comments',
        owner: {
          login: 'vsouza',
          id: 484656,
          node_id: 'MDQ6VXNlcjQ4NDY1Ng==',
          avatar_url: 'https://avatars.githubusercontent.com/u/484656?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/vsouza',
          html_url: 'https://github.com/vsouza',
          followers_url: 'https://api.github.com/users/vsouza/followers',
          following_url:
            'https://api.github.com/users/vsouza/following{/other_user}',
          gists_url: 'https://api.github.com/users/vsouza/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/vsouza/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/vsouza/subscriptions',
          organizations_url: 'https://api.github.com/users/vsouza/orgs',
          repos_url: 'https://api.github.com/users/vsouza/repos',
          events_url: 'https://api.github.com/users/vsouza/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/vsouza/received_events',
          type: 'User',
          site_admin: false,
        },
        truncated: false,
      },
      {
        url: 'https://api.github.com/gists/77b2aaea67904177ae167fa5edb482c1',
        forks_url:
          'https://api.github.com/gists/77b2aaea67904177ae167fa5edb482c1/forks',
        commits_url:
          'https://api.github.com/gists/77b2aaea67904177ae167fa5edb482c1/commits',
        id: '77b2aaea67904177ae167fa5edb482c1',
        node_id: 'MDQ6R2lzdDc3YjJhYWVhNjc5MDQxNzdhZTE2N2ZhNWVkYjQ4MmMx',
        git_pull_url:
          'https://gist.github.com/77b2aaea67904177ae167fa5edb482c1.git',
        git_push_url:
          'https://gist.github.com/77b2aaea67904177ae167fa5edb482c1.git',
        html_url: 'https://gist.github.com/77b2aaea67904177ae167fa5edb482c1',
        files: {
          'spark_context.py': {
            filename: 'spark_context.py',
            type: 'application/x-python',
            language: 'Python',
            raw_url:
              'https://gist.githubusercontent.com/vsouza/77b2aaea67904177ae167fa5edb482c1/raw/31baf8ea98587296b6aeee9c7af51d7d32323759/spark_context.py',
            size: 426,
          },
        },
        public: true,
        created_at: '2016-10-05T02:34:05Z',
        updated_at: '2016-10-05T02:34:06Z',
        description: '',
        comments: 0,
        user: null,
        comments_url:
          'https://api.github.com/gists/77b2aaea67904177ae167fa5edb482c1/comments',
        owner: {
          login: 'vsouza',
          id: 484656,
          node_id: 'MDQ6VXNlcjQ4NDY1Ng==',
          avatar_url: 'https://avatars.githubusercontent.com/u/484656?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/vsouza',
          html_url: 'https://github.com/vsouza',
          followers_url: 'https://api.github.com/users/vsouza/followers',
          following_url:
            'https://api.github.com/users/vsouza/following{/other_user}',
          gists_url: 'https://api.github.com/users/vsouza/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/vsouza/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/vsouza/subscriptions',
          organizations_url: 'https://api.github.com/users/vsouza/orgs',
          repos_url: 'https://api.github.com/users/vsouza/repos',
          events_url: 'https://api.github.com/users/vsouza/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/vsouza/received_events',
          type: 'User',
          site_admin: false,
        },
        truncated: false,
      },
      {
        url: 'https://api.github.com/gists/6f761a516961628508ae361f488e73b1',
        forks_url:
          'https://api.github.com/gists/6f761a516961628508ae361f488e73b1/forks',
        commits_url:
          'https://api.github.com/gists/6f761a516961628508ae361f488e73b1/commits',
        id: '6f761a516961628508ae361f488e73b1',
        node_id: 'MDQ6R2lzdDZmNzYxYTUxNjk2MTYyODUwOGFlMzYxZjQ4OGU3M2Ix',
        git_pull_url:
          'https://gist.github.com/6f761a516961628508ae361f488e73b1.git',
        git_push_url:
          'https://gist.github.com/6f761a516961628508ae361f488e73b1.git',
        html_url: 'https://gist.github.com/6f761a516961628508ae361f488e73b1',
        files: {
          'kinesis_consumer.py': {
            filename: 'kinesis_consumer.py',
            type: 'application/x-python',
            language: 'Python',
            raw_url:
              'https://gist.githubusercontent.com/vsouza/6f761a516961628508ae361f488e73b1/raw/66000324641eb65616cf2867fd473bbbcd313c7a/kinesis_consumer.py',
            size: 557,
          },
        },
        public: true,
        created_at: '2016-10-05T02:05:56Z',
        updated_at: '2016-10-05T03:04:26Z',
        description: '',
        comments: 0,
        user: null,
        comments_url:
          'https://api.github.com/gists/6f761a516961628508ae361f488e73b1/comments',
        owner: {
          login: 'vsouza',
          id: 484656,
          node_id: 'MDQ6VXNlcjQ4NDY1Ng==',
          avatar_url: 'https://avatars.githubusercontent.com/u/484656?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/vsouza',
          html_url: 'https://github.com/vsouza',
          followers_url: 'https://api.github.com/users/vsouza/followers',
          following_url:
            'https://api.github.com/users/vsouza/following{/other_user}',
          gists_url: 'https://api.github.com/users/vsouza/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/vsouza/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/vsouza/subscriptions',
          organizations_url: 'https://api.github.com/users/vsouza/orgs',
          repos_url: 'https://api.github.com/users/vsouza/repos',
          events_url: 'https://api.github.com/users/vsouza/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/vsouza/received_events',
          type: 'User',
          site_admin: false,
        },
        truncated: false,
      },
      {
        url: 'https://api.github.com/gists/4d7bfa47864f2be07a3272bcacd28542',
        forks_url:
          'https://api.github.com/gists/4d7bfa47864f2be07a3272bcacd28542/forks',
        commits_url:
          'https://api.github.com/gists/4d7bfa47864f2be07a3272bcacd28542/commits',
        id: '4d7bfa47864f2be07a3272bcacd28542',
        node_id: 'MDQ6R2lzdDRkN2JmYTQ3ODY0ZjJiZTA3YTMyNzJiY2FjZDI4NTQy',
        git_pull_url:
          'https://gist.github.com/4d7bfa47864f2be07a3272bcacd28542.git',
        git_push_url:
          'https://gist.github.com/4d7bfa47864f2be07a3272bcacd28542.git',
        html_url: 'https://gist.github.com/4d7bfa47864f2be07a3272bcacd28542',
        files: {
          'request.swift': {
            filename: 'request.swift',
            type: 'text/plain',
            language: 'Swift',
            raw_url:
              'https://gist.githubusercontent.com/vsouza/4d7bfa47864f2be07a3272bcacd28542/raw/90dcff9d17472512e6c185cef90515e33ab279c5/request.swift',
            size: 368,
          },
        },
        public: true,
        created_at: '2016-05-23T02:34:29Z',
        updated_at: '2016-05-31T13:21:15Z',
        description: 'Simple HTTP request. Swift backend implementation',
        comments: 0,
        user: null,
        comments_url:
          'https://api.github.com/gists/4d7bfa47864f2be07a3272bcacd28542/comments',
        owner: {
          login: 'vsouza',
          id: 484656,
          node_id: 'MDQ6VXNlcjQ4NDY1Ng==',
          avatar_url: 'https://avatars.githubusercontent.com/u/484656?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/vsouza',
          html_url: 'https://github.com/vsouza',
          followers_url: 'https://api.github.com/users/vsouza/followers',
          following_url:
            'https://api.github.com/users/vsouza/following{/other_user}',
          gists_url: 'https://api.github.com/users/vsouza/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/vsouza/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/vsouza/subscriptions',
          organizations_url: 'https://api.github.com/users/vsouza/orgs',
          repos_url: 'https://api.github.com/users/vsouza/repos',
          events_url: 'https://api.github.com/users/vsouza/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/vsouza/received_events',
          type: 'User',
          site_admin: false,
        },
        truncated: false,
      },
      {
        url: 'https://api.github.com/gists/d7e7a1621f7dfd34d728549e10278e68',
        forks_url:
          'https://api.github.com/gists/d7e7a1621f7dfd34d728549e10278e68/forks',
        commits_url:
          'https://api.github.com/gists/d7e7a1621f7dfd34d728549e10278e68/commits',
        id: 'd7e7a1621f7dfd34d728549e10278e68',
        node_id: 'MDQ6R2lzdGQ3ZTdhMTYyMWY3ZGZkMzRkNzI4NTQ5ZTEwMjc4ZTY4',
        git_pull_url:
          'https://gist.github.com/d7e7a1621f7dfd34d728549e10278e68.git',
        git_push_url:
          'https://gist.github.com/d7e7a1621f7dfd34d728549e10278e68.git',
        html_url: 'https://gist.github.com/d7e7a1621f7dfd34d728549e10278e68',
        files: {
          'colorsUtil.swift': {
            filename: 'colorsUtil.swift',
            type: 'text/plain',
            language: 'Swift',
            raw_url:
              'https://gist.githubusercontent.com/vsouza/d7e7a1621f7dfd34d728549e10278e68/raw/9843a717aab415effa70c6f5bdcf694ec7fc9446/colorsUtil.swift',
            size: 1021,
          },
        },
        public: true,
        created_at: '2016-05-11T20:45:36Z',
        updated_at: '2017-07-20T18:27:55Z',
        description: 'Convert hex string to UIColor',
        comments: 0,
        user: null,
        comments_url:
          'https://api.github.com/gists/d7e7a1621f7dfd34d728549e10278e68/comments',
        owner: {
          login: 'vsouza',
          id: 484656,
          node_id: 'MDQ6VXNlcjQ4NDY1Ng==',
          avatar_url: 'https://avatars.githubusercontent.com/u/484656?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/vsouza',
          html_url: 'https://github.com/vsouza',
          followers_url: 'https://api.github.com/users/vsouza/followers',
          following_url:
            'https://api.github.com/users/vsouza/following{/other_user}',
          gists_url: 'https://api.github.com/users/vsouza/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/vsouza/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/vsouza/subscriptions',
          organizations_url: 'https://api.github.com/users/vsouza/orgs',
          repos_url: 'https://api.github.com/users/vsouza/repos',
          events_url: 'https://api.github.com/users/vsouza/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/vsouza/received_events',
          type: 'User',
          site_admin: false,
        },
        truncated: false,
      },
      {
        url: 'https://api.github.com/gists/4368660c75268c87d42a',
        forks_url: 'https://api.github.com/gists/4368660c75268c87d42a/forks',
        commits_url:
          'https://api.github.com/gists/4368660c75268c87d42a/commits',
        id: '4368660c75268c87d42a',
        node_id: 'MDQ6R2lzdDQzNjg2NjBjNzUyNjhjODdkNDJh',
        git_pull_url: 'https://gist.github.com/4368660c75268c87d42a.git',
        git_push_url: 'https://gist.github.com/4368660c75268c87d42a.git',
        html_url: 'https://gist.github.com/4368660c75268c87d42a',
        files: {
          'GQL.swift': {
            filename: 'GQL.swift',
            type: 'text/plain',
            language: 'Swift',
            raw_url:
              'https://gist.githubusercontent.com/vsouza/4368660c75268c87d42a/raw/1e9b65b5e6db5e75bac32bfde654b619bde4ac8a/GQL.swift',
            size: 3467,
          },
        },
        public: true,
        created_at: '2016-03-28T02:41:54Z',
        updated_at: '2016-03-28T02:41:54Z',
        description: 'GraphQL data structure implemented in Swift',
        comments: 0,
        user: null,
        comments_url:
          'https://api.github.com/gists/4368660c75268c87d42a/comments',
        owner: {
          login: 'vsouza',
          id: 484656,
          node_id: 'MDQ6VXNlcjQ4NDY1Ng==',
          avatar_url: 'https://avatars.githubusercontent.com/u/484656?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/vsouza',
          html_url: 'https://github.com/vsouza',
          followers_url: 'https://api.github.com/users/vsouza/followers',
          following_url:
            'https://api.github.com/users/vsouza/following{/other_user}',
          gists_url: 'https://api.github.com/users/vsouza/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/vsouza/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/vsouza/subscriptions',
          organizations_url: 'https://api.github.com/users/vsouza/orgs',
          repos_url: 'https://api.github.com/users/vsouza/repos',
          events_url: 'https://api.github.com/users/vsouza/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/vsouza/received_events',
          type: 'User',
          site_admin: false,
        },
        truncated: false,
      },
      {
        url: 'https://api.github.com/gists/62ea409491cb605b5633',
        forks_url: 'https://api.github.com/gists/62ea409491cb605b5633/forks',
        commits_url:
          'https://api.github.com/gists/62ea409491cb605b5633/commits',
        id: '62ea409491cb605b5633',
        node_id: 'MDQ6R2lzdDYyZWE0MDk0OTFjYjYwNWI1NjMz',
        git_pull_url: 'https://gist.github.com/62ea409491cb605b5633.git',
        git_push_url: 'https://gist.github.com/62ea409491cb605b5633.git',
        html_url: 'https://gist.github.com/62ea409491cb605b5633',
        files: {
          'parse_aws_s3_billing.py': {
            filename: 'parse_aws_s3_billing.py',
            type: 'application/x-python',
            language: 'Python',
            raw_url:
              'https://gist.githubusercontent.com/vsouza/62ea409491cb605b5633/raw/3331342d1f3678ba6b61ab02f26982032763e2d9/parse_aws_s3_billing.py',
            size: 2144,
          },
        },
        public: true,
        created_at: '2015-11-17T17:48:32Z',
        updated_at: '2020-09-23T04:03:51Z',
        description:
          'Simplistic script to parse the detailed AWS billing CSV file.\r\n\r\nScript displays cost of S3 operations broken down per region, bucket and usage \r\ntype (either storage or network). It also sums up the amount of storage used per bucket. \r\nOutput is filtered wrt to costs < 1$.\r\n\r\nSee http://docs.aws.amazon.com/awsaccountbilling/latest/about/programaccess.html for \r\nhow to set up programmatic access to your billing.\r\n\r\nShould be simple enough to enhance this script and use it for other AWS resources \r\n(EC2, EMR, etc)',
        comments: 0,
        user: null,
        comments_url:
          'https://api.github.com/gists/62ea409491cb605b5633/comments',
        owner: {
          login: 'vsouza',
          id: 484656,
          node_id: 'MDQ6VXNlcjQ4NDY1Ng==',
          avatar_url: 'https://avatars.githubusercontent.com/u/484656?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/vsouza',
          html_url: 'https://github.com/vsouza',
          followers_url: 'https://api.github.com/users/vsouza/followers',
          following_url:
            'https://api.github.com/users/vsouza/following{/other_user}',
          gists_url: 'https://api.github.com/users/vsouza/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/vsouza/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/vsouza/subscriptions',
          organizations_url: 'https://api.github.com/users/vsouza/orgs',
          repos_url: 'https://api.github.com/users/vsouza/repos',
          events_url: 'https://api.github.com/users/vsouza/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/vsouza/received_events',
          type: 'User',
          site_admin: false,
        },
        truncated: false,
      },
      {
        url: 'https://api.github.com/gists/37c2244a0c164154e0a9',
        forks_url: 'https://api.github.com/gists/37c2244a0c164154e0a9/forks',
        commits_url:
          'https://api.github.com/gists/37c2244a0c164154e0a9/commits',
        id: '37c2244a0c164154e0a9',
        node_id: 'MDQ6R2lzdDM3YzIyNDRhMGMxNjQxNTRlMGE5',
        git_pull_url: 'https://gist.github.com/37c2244a0c164154e0a9.git',
        git_push_url: 'https://gist.github.com/37c2244a0c164154e0a9.git',
        html_url: 'https://gist.github.com/37c2244a0c164154e0a9',
        files: {
          'reflection.go': {
            filename: 'reflection.go',
            type: 'text/plain',
            language: 'Go',
            raw_url:
              'https://gist.githubusercontent.com/vsouza/37c2244a0c164154e0a9/raw/299d170f8180bd2adc8a60fa7154f862094d1b39/reflection.go',
            size: 604,
          },
        },
        public: true,
        created_at: '2015-09-16T02:38:07Z',
        updated_at: '2016-04-13T16:09:40Z',
        description: 'Golang Reflection Example',
        comments: 0,
        user: null,
        comments_url:
          'https://api.github.com/gists/37c2244a0c164154e0a9/comments',
        owner: {
          login: 'vsouza',
          id: 484656,
          node_id: 'MDQ6VXNlcjQ4NDY1Ng==',
          avatar_url: 'https://avatars.githubusercontent.com/u/484656?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/vsouza',
          html_url: 'https://github.com/vsouza',
          followers_url: 'https://api.github.com/users/vsouza/followers',
          following_url:
            'https://api.github.com/users/vsouza/following{/other_user}',
          gists_url: 'https://api.github.com/users/vsouza/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/vsouza/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/vsouza/subscriptions',
          organizations_url: 'https://api.github.com/users/vsouza/orgs',
          repos_url: 'https://api.github.com/users/vsouza/repos',
          events_url: 'https://api.github.com/users/vsouza/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/vsouza/received_events',
          type: 'User',
          site_admin: false,
        },
        truncated: false,
      },
      {
        url: 'https://api.github.com/gists/0f7c889e6f19f62eb403',
        forks_url: 'https://api.github.com/gists/0f7c889e6f19f62eb403/forks',
        commits_url:
          'https://api.github.com/gists/0f7c889e6f19f62eb403/commits',
        id: '0f7c889e6f19f62eb403',
        node_id: 'MDQ6R2lzdDBmN2M4ODllNmYxOWY2MmViNDAz',
        git_pull_url: 'https://gist.github.com/0f7c889e6f19f62eb403.git',
        git_push_url: 'https://gist.github.com/0f7c889e6f19f62eb403.git',
        html_url: 'https://gist.github.com/0f7c889e6f19f62eb403',
        files: {
          'csv_diff.py': {
            filename: 'csv_diff.py',
            type: 'application/x-python',
            language: 'Python',
            raw_url:
              'https://gist.githubusercontent.com/vsouza/0f7c889e6f19f62eb403/raw/c786fb4011189c81872b4edd8ad4988bc4496b48/csv_diff.py',
            size: 840,
          },
        },
        public: true,
        created_at: '2015-09-07T23:25:06Z',
        updated_at: '2016-01-04T12:46:25Z',
        description: '',
        comments: 0,
        user: null,
        comments_url:
          'https://api.github.com/gists/0f7c889e6f19f62eb403/comments',
        owner: {
          login: 'vsouza',
          id: 484656,
          node_id: 'MDQ6VXNlcjQ4NDY1Ng==',
          avatar_url: 'https://avatars.githubusercontent.com/u/484656?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/vsouza',
          html_url: 'https://github.com/vsouza',
          followers_url: 'https://api.github.com/users/vsouza/followers',
          following_url:
            'https://api.github.com/users/vsouza/following{/other_user}',
          gists_url: 'https://api.github.com/users/vsouza/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/vsouza/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/vsouza/subscriptions',
          organizations_url: 'https://api.github.com/users/vsouza/orgs',
          repos_url: 'https://api.github.com/users/vsouza/repos',
          events_url: 'https://api.github.com/users/vsouza/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/vsouza/received_events',
          type: 'User',
          site_admin: false,
        },
        truncated: false,
      },
      {
        url: 'https://api.github.com/gists/537e932409a0f027e1d6',
        forks_url: 'https://api.github.com/gists/537e932409a0f027e1d6/forks',
        commits_url:
          'https://api.github.com/gists/537e932409a0f027e1d6/commits',
        id: '537e932409a0f027e1d6',
        node_id: 'MDQ6R2lzdDUzN2U5MzI0MDlhMGYwMjdlMWQ2',
        git_pull_url: 'https://gist.github.com/537e932409a0f027e1d6.git',
        git_push_url: 'https://gist.github.com/537e932409a0f027e1d6.git',
        html_url: 'https://gist.github.com/537e932409a0f027e1d6',
        files: {
          'thread.py': {
            filename: 'thread.py',
            type: 'application/x-python',
            language: 'Python',
            raw_url:
              'https://gist.githubusercontent.com/vsouza/537e932409a0f027e1d6/raw/dc74762b1de98720d1af6b4663769187395563e4/thread.py',
            size: 1567,
          },
        },
        public: true,
        created_at: '2015-06-24T02:45:14Z',
        updated_at: '2021-03-24T16:54:24Z',
        description: 'Python thread example. ',
        comments: 0,
        user: null,
        comments_url:
          'https://api.github.com/gists/537e932409a0f027e1d6/comments',
        owner: {
          login: 'vsouza',
          id: 484656,
          node_id: 'MDQ6VXNlcjQ4NDY1Ng==',
          avatar_url: 'https://avatars.githubusercontent.com/u/484656?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/vsouza',
          html_url: 'https://github.com/vsouza',
          followers_url: 'https://api.github.com/users/vsouza/followers',
          following_url:
            'https://api.github.com/users/vsouza/following{/other_user}',
          gists_url: 'https://api.github.com/users/vsouza/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/vsouza/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/vsouza/subscriptions',
          organizations_url: 'https://api.github.com/users/vsouza/orgs',
          repos_url: 'https://api.github.com/users/vsouza/repos',
          events_url: 'https://api.github.com/users/vsouza/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/vsouza/received_events',
          type: 'User',
          site_admin: false,
        },
        truncated: false,
      },
      {
        url: 'https://api.github.com/gists/17143b846f608d92179e',
        forks_url: 'https://api.github.com/gists/17143b846f608d92179e/forks',
        commits_url:
          'https://api.github.com/gists/17143b846f608d92179e/commits',
        id: '17143b846f608d92179e',
        node_id: 'MDQ6R2lzdDE3MTQzYjg0NmY2MDhkOTIxNzll',
        git_pull_url: 'https://gist.github.com/17143b846f608d92179e.git',
        git_push_url: 'https://gist.github.com/17143b846f608d92179e.git',
        html_url: 'https://gist.github.com/17143b846f608d92179e',
        files: {
          'go.md': {
            filename: 'go.md',
            type: 'text/markdown',
            language: 'Markdown',
            raw_url:
              'https://gist.githubusercontent.com/vsouza/17143b846f608d92179e/raw/61819cfbca7df534f57d5ca5229275e5e6430fa9/go.md',
            size: 2461,
          },
          'go2.md': {
            filename: 'go2.md',
            type: 'text/markdown',
            language: 'Markdown',
            raw_url:
              'https://gist.githubusercontent.com/vsouza/17143b846f608d92179e/raw/21fa9811cc678b3a8a9eabe11782979686ed1306/go2.md',
            size: 51,
          },
        },
        public: true,
        created_at: '2015-06-16T16:35:13Z',
        updated_at: '2016-04-13T16:10:52Z',
        description: null,
        comments: 0,
        user: null,
        comments_url:
          'https://api.github.com/gists/17143b846f608d92179e/comments',
        owner: {
          login: 'vsouza',
          id: 484656,
          node_id: 'MDQ6VXNlcjQ4NDY1Ng==',
          avatar_url: 'https://avatars.githubusercontent.com/u/484656?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/vsouza',
          html_url: 'https://github.com/vsouza',
          followers_url: 'https://api.github.com/users/vsouza/followers',
          following_url:
            'https://api.github.com/users/vsouza/following{/other_user}',
          gists_url: 'https://api.github.com/users/vsouza/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/vsouza/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/vsouza/subscriptions',
          organizations_url: 'https://api.github.com/users/vsouza/orgs',
          repos_url: 'https://api.github.com/users/vsouza/repos',
          events_url: 'https://api.github.com/users/vsouza/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/vsouza/received_events',
          type: 'User',
          site_admin: false,
        },
        truncated: false,
      },
      {
        url: 'https://api.github.com/gists/77e6b20520d07652ed7d',
        forks_url: 'https://api.github.com/gists/77e6b20520d07652ed7d/forks',
        commits_url:
          'https://api.github.com/gists/77e6b20520d07652ed7d/commits',
        id: '77e6b20520d07652ed7d',
        node_id: 'MDQ6R2lzdDc3ZTZiMjA1MjBkMDc2NTJlZDdk',
        git_pull_url: 'https://gist.github.com/77e6b20520d07652ed7d.git',
        git_push_url: 'https://gist.github.com/77e6b20520d07652ed7d.git',
        html_url: 'https://gist.github.com/77e6b20520d07652ed7d',
        files: {
          '.bashrc': {
            filename: '.bashrc',
            type: 'text/plain',
            language: 'Shell',
            raw_url:
              'https://gist.githubusercontent.com/vsouza/77e6b20520d07652ed7d/raw/1cc272bf2b1c6e7481c722df61a0f998768f4728/.bashrc',
            size: 206,
          },
          '.zshrc': {
            filename: '.zshrc',
            type: 'text/plain',
            language: 'Shell',
            raw_url:
              'https://gist.githubusercontent.com/vsouza/77e6b20520d07652ed7d/raw/ad0ba9ae796a36c74a8d4f22a5440b4cfe002d62/.zshrc',
            size: 197,
          },
          'config.fish': {
            filename: 'config.fish',
            type: 'text/plain',
            language: 'fish',
            raw_url:
              'https://gist.githubusercontent.com/vsouza/77e6b20520d07652ed7d/raw/483714658db40eff6b9c35031c31b86220954d13/config.fish',
            size: 205,
          },
          'install.sh': {
            filename: 'install.sh',
            type: 'application/x-sh',
            language: 'Shell',
            raw_url:
              'https://gist.githubusercontent.com/vsouza/77e6b20520d07652ed7d/raw/320cae568a1513332d519806fd09df4d10fc7c36/install.sh',
            size: 530,
          },
        },
        public: true,
        created_at: '2015-02-02T16:39:54Z',
        updated_at: '2021-07-16T03:02:13Z',
        description:
          'Golang setup in Mac OSX with HomeBrew. Set `GOPATH` and `GOROOT` variables in zshell, fish or bash.',
        comments: 38,
        user: null,
        comments_url:
          'https://api.github.com/gists/77e6b20520d07652ed7d/comments',
        owner: {
          login: 'vsouza',
          id: 484656,
          node_id: 'MDQ6VXNlcjQ4NDY1Ng==',
          avatar_url: 'https://avatars.githubusercontent.com/u/484656?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/vsouza',
          html_url: 'https://github.com/vsouza',
          followers_url: 'https://api.github.com/users/vsouza/followers',
          following_url:
            'https://api.github.com/users/vsouza/following{/other_user}',
          gists_url: 'https://api.github.com/users/vsouza/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/vsouza/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/vsouza/subscriptions',
          organizations_url: 'https://api.github.com/users/vsouza/orgs',
          repos_url: 'https://api.github.com/users/vsouza/repos',
          events_url: 'https://api.github.com/users/vsouza/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/vsouza/received_events',
          type: 'User',
          site_admin: false,
        },
        truncated: false,
      },
      {
        url: 'https://api.github.com/gists/7719953',
        forks_url: 'https://api.github.com/gists/7719953/forks',
        commits_url: 'https://api.github.com/gists/7719953/commits',
        id: '7719953',
        node_id: 'MDQ6R2lzdDc3MTk5NTM=',
        git_pull_url: 'https://gist.github.com/7719953.git',
        git_push_url: 'https://gist.github.com/7719953.git',
        html_url: 'https://gist.github.com/7719953',
        files: {
          'Países - Mongo': {
            filename: 'Países - Mongo',
            type: 'text/plain',
            language: null,
            raw_url:
              'https://gist.githubusercontent.com/vsouza/7719953/raw/f845f689f83c10d9da9577ad24ca3ac0fdb7f448/Pa%C3%ADses%20-%20Mongo',
            size: 13544,
          },
        },
        public: true,
        created_at: '2013-11-30T14:50:41Z',
        updated_at: '2018-01-02T16:27:14Z',
        description:
          'Lista com todos (ou quase) países do mundo, com nome em português e sigla.',
        comments: 0,
        user: null,
        comments_url: 'https://api.github.com/gists/7719953/comments',
        owner: {
          login: 'vsouza',
          id: 484656,
          node_id: 'MDQ6VXNlcjQ4NDY1Ng==',
          avatar_url: 'https://avatars.githubusercontent.com/u/484656?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/vsouza',
          html_url: 'https://github.com/vsouza',
          followers_url: 'https://api.github.com/users/vsouza/followers',
          following_url:
            'https://api.github.com/users/vsouza/following{/other_user}',
          gists_url: 'https://api.github.com/users/vsouza/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/vsouza/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/vsouza/subscriptions',
          organizations_url: 'https://api.github.com/users/vsouza/orgs',
          repos_url: 'https://api.github.com/users/vsouza/repos',
          events_url: 'https://api.github.com/users/vsouza/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/vsouza/received_events',
          type: 'User',
          site_admin: false,
        },
        truncated: false,
      },
    ],
    status: 200,
    statusText: '',
    headers: {
      'cache-control': 'public, max-age=60, s-maxage=60',
      'content-type': 'application/json; charset=utf-8',
      etag: 'W/"0c86524f38a880c9f8ad75d4f17754d37f466f9ed01af883e77fb9deeb0b2a69"',
      'x-github-media-type': 'github.v3',
      'x-ratelimit-limit': '60',
      'x-ratelimit-remaining': '55',
      'x-ratelimit-reset': '1626817203',
      'x-ratelimit-resource': 'core',
      'x-ratelimit-used': '5',
    },
    config: {
      url: 'https://api.github.com/users/vsouza/gists',
      method: 'get',
      headers: {
        Accept: 'application/json, text/plain, */*',
      },
      transformRequest: [null],
      transformResponse: [null],
      timeout: 0,
      xsrfCookieName: 'XSRF-TOKEN',
      xsrfHeaderName: 'X-XSRF-TOKEN',
      maxContentLength: -1,
      maxBodyLength: -1,
    },
    request: {},
  }
}
export const getSampleGistWithFileContent = () => {
  return {
    data: [
      {
        url: 'https://api.github.com/gists/547a9749e71411ca30a8c73937c8dd79',
        forks_url:
          'https://api.github.com/gists/547a9749e71411ca30a8c73937c8dd79/forks',
        commits_url:
          'https://api.github.com/gists/547a9749e71411ca30a8c73937c8dd79/commits',
        id: '547a9749e71411ca30a8c73937c8dd79',
        node_id: 'MDQ6R2lzdDU0N2E5NzQ5ZTcxNDExY2EzMGE4YzczOTM3YzhkZDc5',
        git_pull_url:
          'https://gist.github.com/547a9749e71411ca30a8c73937c8dd79.git',
        git_push_url:
          'https://gist.github.com/547a9749e71411ca30a8c73937c8dd79.git',
        html_url: 'https://gist.github.com/547a9749e71411ca30a8c73937c8dd79',
        files: {
          'term_context.go': {
            filename: 'term_context.go',
            type: 'text/plain',
            language: 'Go',
            raw_url:
              'https://gist.githubusercontent.com/vsouza/547a9749e71411ca30a8c73937c8dd79/raw/5b7a70b36bcfae5e6ceb82b734938f6881c99f8a/term_context.go',
            size: 351,
            content:
              'func main() {\n\n\tctx := context.Background()\n\n\t// trap Ctrl+C and call cancel on the context\n\tctx, cancel := context.WithCancel(ctx)\n\tc := make(chan os.Signal, 1)\n\tsignal.Notify(c, os.Interrupt)\n\tdefer func() {\n\t\tsignal.Stop(c)\n\t\tcancel()\n\t}()\n\tgo func() {\n\t\tselect {\n\t\tcase <-c:\n\t\t\tcancel()\n\t\tcase <-ctx.Done():\n\t\t}\n\t}()\n\t\n\tdoSomethingAwesome(ctx)\n\n}\n',
          },
        },
        public: true,
        created_at: '2020-09-28T22:18:50Z',
        updated_at: '2020-09-28T22:18:51Z',
        description: 'Making Ctrl+C termination cancel the context.Context',
        comments: 0,
        user: null,
        comments_url:
          'https://api.github.com/gists/547a9749e71411ca30a8c73937c8dd79/comments',
        owner: {
          login: 'vsouza',
          id: 484656,
          node_id: 'MDQ6VXNlcjQ4NDY1Ng==',
          avatar_url: 'https://avatars.githubusercontent.com/u/484656?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/vsouza',
          html_url: 'https://github.com/vsouza',
          followers_url: 'https://api.github.com/users/vsouza/followers',
          following_url:
            'https://api.github.com/users/vsouza/following{/other_user}',
          gists_url: 'https://api.github.com/users/vsouza/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/vsouza/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/vsouza/subscriptions',
          organizations_url: 'https://api.github.com/users/vsouza/orgs',
          repos_url: 'https://api.github.com/users/vsouza/repos',
          events_url: 'https://api.github.com/users/vsouza/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/vsouza/received_events',
          type: 'User',
          site_admin: false,
        },
        truncated: false,
      },
      {
        url: 'https://api.github.com/gists/f95d9d2a5ec70c3f0502ed838a7f5944',
        forks_url:
          'https://api.github.com/gists/f95d9d2a5ec70c3f0502ed838a7f5944/forks',
        commits_url:
          'https://api.github.com/gists/f95d9d2a5ec70c3f0502ed838a7f5944/commits',
        id: 'f95d9d2a5ec70c3f0502ed838a7f5944',
        node_id: 'MDQ6R2lzdGY5NWQ5ZDJhNWVjNzBjM2YwNTAyZWQ4MzhhN2Y1OTQ0',
        git_pull_url:
          'https://gist.github.com/f95d9d2a5ec70c3f0502ed838a7f5944.git',
        git_push_url:
          'https://gist.github.com/f95d9d2a5ec70c3f0502ed838a7f5944.git',
        html_url: 'https://gist.github.com/f95d9d2a5ec70c3f0502ed838a7f5944',
        files: {
          'installing_cassandra.md': {
            filename: 'installing_cassandra.md',
            type: 'text/markdown',
            language: 'Markdown',
            raw_url:
              'https://gist.githubusercontent.com/vsouza/f95d9d2a5ec70c3f0502ed838a7f5944/raw/c24e906f9d61f7b480ac857cccb91c17bde8fbb8/installing_cassandra.md',
            size: 1843,
            content:
              'Installing Cassandra on Mac OS X\n================================\n\nInstall Homebrew\n----------------\nHomebrew is a great little package manager for OS X. If you haven\'t already, installing it is pretty easy:\n\n```Shell\nruby -e "$(curl -fsSL https://raw.github.com/Homebrew/homebrew/go/install)"\n```\n\nInstall Python\n--------------\nMac OS X has a copy of Python preinstalled, but this makes sure you get the newest version.\n\n```Shell\nbrew install python\n```\n\nInstall cql\n-----------\nTo use cqlsh, the Cassandra query language shell, you need to install cql:\n\n```Shell\npip install cql\n```\n\nInstall Cassandra\n-----------------\nThis installs Apache Cassandra:\n\n```Shell\nbrew install cassandra\n```\n\nStarting/Stopping Cassandra\n---------------------------\nUse this command to start Cassandra:\n\n```Shell\nlaunchctl load ~/Library/LaunchAgents/homebrew.mxcl.cassandra.plist\n```\n\nUse this command to stop Cassandra:\n\n```Shell\nlaunchctl unload ~/Library/LaunchAgents/homebrew.mxcl.cassandra.plist\n```\n\nOn Mavericks, Homebrew failed to move the plist file into LaunchAgents, which gives this error message:\n\n```Shell\nlaunchctl: Couldn\'t stat("/Users/<user>/Library/LaunchAgents/homebrew.mxcl.cassandra.plist"): No such file or directory\n```\n\nTo fix this just issue the following command. Then, try using the `launchctl load` command again:\n\n```Shell\ncp /usr/local/Cellar/cassandra/<version number>/homebrew.mxcl.cassandra.plist ~/Library/LaunchAgents/\n```\n\nCassandra file locations\n------------------------\n- Properties: `/usr/local/etc/cassandra`\n- Logs: `/usr/local/var/log/cassandra`\n- Data: `/usr/local/var/lib/cassandra/data`\n\nLinks\n-----\n- [Apache Cassandra] (http://cassandra.apache.org/)\n- [Datastax Cassandra Documentation] (http://www.datastax.com/documentation/cassandra/2.0/cassandra/gettingStartedCassandraIntro.html)\n\nHave fun with Cassandra!\n',
          },
        },
        public: true,
        created_at: '2020-07-30T20:53:13Z',
        updated_at: '2020-07-30T20:53:14Z',
        description: 'Installing Cassandra on Mac OS X',
        comments: 0,
        user: null,
        comments_url:
          'https://api.github.com/gists/f95d9d2a5ec70c3f0502ed838a7f5944/comments',
        owner: {
          login: 'vsouza',
          id: 484656,
          node_id: 'MDQ6VXNlcjQ4NDY1Ng==',
          avatar_url: 'https://avatars.githubusercontent.com/u/484656?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/vsouza',
          html_url: 'https://github.com/vsouza',
          followers_url: 'https://api.github.com/users/vsouza/followers',
          following_url:
            'https://api.github.com/users/vsouza/following{/other_user}',
          gists_url: 'https://api.github.com/users/vsouza/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/vsouza/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/vsouza/subscriptions',
          organizations_url: 'https://api.github.com/users/vsouza/orgs',
          repos_url: 'https://api.github.com/users/vsouza/repos',
          events_url: 'https://api.github.com/users/vsouza/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/vsouza/received_events',
          type: 'User',
          site_admin: false,
        },
        truncated: false,
      },
      {
        url: 'https://api.github.com/gists/d4d8edc96cacb70f73bb149c4e36c542',
        forks_url:
          'https://api.github.com/gists/d4d8edc96cacb70f73bb149c4e36c542/forks',
        commits_url:
          'https://api.github.com/gists/d4d8edc96cacb70f73bb149c4e36c542/commits',
        id: 'd4d8edc96cacb70f73bb149c4e36c542',
        node_id: 'MDQ6R2lzdGQ0ZDhlZGM5NmNhY2I3MGY3M2JiMTQ5YzRlMzZjNTQy',
        git_pull_url:
          'https://gist.github.com/d4d8edc96cacb70f73bb149c4e36c542.git',
        git_push_url:
          'https://gist.github.com/d4d8edc96cacb70f73bb149c4e36c542.git',
        html_url: 'https://gist.github.com/d4d8edc96cacb70f73bb149c4e36c542',
        files: {
          'main.go': {
            filename: 'main.go',
            type: 'text/plain',
            language: 'Go',
            raw_url:
              'https://gist.githubusercontent.com/vsouza/d4d8edc96cacb70f73bb149c4e36c542/raw/49568833a509ef3c0c4aa10c024a52eed041d0b7/main.go',
            size: 375,
            content:
              'package main\n\nimport (\n\t"log"\n\t"myserver"\n\t"net/http"\n)\n\nconst addr = "localhost:12345"\n\nfunc main() {\n\tmux := http.NewServeMux()\n\thandler := &myserver.MyHandler{}\n\tmux.Handle("/favicon.ico", http.NotFoundHandler())\n\tmux.Handle("/", handler)\n\tlog.Printf("Now listening on %s...\\n", addr)\n\tserver := http.Server{Handler: mux, Addr: addr}\n\tlog.Fatal(server.ListenAndServe())\n}\n',
          },
          'myserver.go': {
            filename: 'myserver.go',
            type: 'text/plain',
            language: 'Go',
            raw_url:
              'https://gist.githubusercontent.com/vsouza/d4d8edc96cacb70f73bb149c4e36c542/raw/040fff12aabb8a69153a5ec68cb8bf63aaa61eae/myserver.go',
            size: 291,
            content:
              'package myserver\n\nimport (\n\t"fmt"\n\t"net/http"\n\t"sync"\n)\n\ntype MyHandler struct {\n\tsync.Mutex\n\tcount int\n}\n\nfunc (h *MyHandler) ServeHTTP(w http.ResponseWriter, r *http.Request) {\n\tvar count int\n\th.Lock()\n\th.count++\n\tcount = h.count\n\th.Unlock()\n\n\tfmt.Fprintf(w, "Visitor count: %d.", count)\n}',
          },
          'myserver_test.go': {
            filename: 'myserver_test.go',
            type: 'text/plain',
            language: 'Go',
            raw_url:
              'https://gist.githubusercontent.com/vsouza/d4d8edc96cacb70f73bb149c4e36c542/raw/47d8573a0c822f1d901ff605a6321ad65b356c23/myserver_test.go',
            size: 648,
            content:
              'package myserver\n\nimport (\n\t"fmt"\n\t"io/ioutil"\n\t"net/http"\n\t"net/http/httptest"\n\t"testing"\n)\n\nfunc TestMyHandler(t *testing.T) {\n\thandler := &MyHandler{}\n\tserver := httptest.NewServer(handler)\n\tdefer server.Close()\n\n\tfor _, i := range []int{1, 2} {\n\t\tresp, err := http.Get(server.URL)\n\t\tif err != nil {\n\t\t\tt.Fatal(err)\n\t\t}\n\t\tif resp.StatusCode != 200 {\n\t\t\tt.Fatalf("Received non-200 response: %d\\n", resp.StatusCode)\n\t\t}\n\t\texpected := fmt.Sprintf("Visitor count: %d.", i)\n\t\tactual, err := ioutil.ReadAll(resp.Body)\n\t\tif err != nil {\n\t\t\tt.Fatal(err)\n\t\t}\n\t\tif expected != string(actual) {\n\t\t\tt.Errorf("Expected the message \'%s\'\\n", expected)\n\t\t}\n\t}\n}',
          },
        },
        public: true,
        created_at: '2018-05-27T22:58:17Z',
        updated_at: '2018-05-27T22:58:17Z',
        description:
          'Example of testing Go HTTP servers using httptest.Server.',
        comments: 0,
        user: null,
        comments_url:
          'https://api.github.com/gists/d4d8edc96cacb70f73bb149c4e36c542/comments',
        owner: {
          login: 'vsouza',
          id: 484656,
          node_id: 'MDQ6VXNlcjQ4NDY1Ng==',
          avatar_url: 'https://avatars.githubusercontent.com/u/484656?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/vsouza',
          html_url: 'https://github.com/vsouza',
          followers_url: 'https://api.github.com/users/vsouza/followers',
          following_url:
            'https://api.github.com/users/vsouza/following{/other_user}',
          gists_url: 'https://api.github.com/users/vsouza/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/vsouza/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/vsouza/subscriptions',
          organizations_url: 'https://api.github.com/users/vsouza/orgs',
          repos_url: 'https://api.github.com/users/vsouza/repos',
          events_url: 'https://api.github.com/users/vsouza/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/vsouza/received_events',
          type: 'User',
          site_admin: false,
        },
        truncated: false,
      },
      {
        url: 'https://api.github.com/gists/2f113fa4b68b8e4a64e77dc50319ee38',
        forks_url:
          'https://api.github.com/gists/2f113fa4b68b8e4a64e77dc50319ee38/forks',
        commits_url:
          'https://api.github.com/gists/2f113fa4b68b8e4a64e77dc50319ee38/commits',
        id: '2f113fa4b68b8e4a64e77dc50319ee38',
        node_id: 'MDQ6R2lzdDJmMTEzZmE0YjY4YjhlNGE2NGU3N2RjNTAzMTllZTM4',
        git_pull_url:
          'https://gist.github.com/2f113fa4b68b8e4a64e77dc50319ee38.git',
        git_push_url:
          'https://gist.github.com/2f113fa4b68b8e4a64e77dc50319ee38.git',
        html_url: 'https://gist.github.com/2f113fa4b68b8e4a64e77dc50319ee38',
        files: {
          'start_streamming_spark.py': {
            filename: 'start_streamming_spark.py',
            type: 'application/x-python',
            language: 'Python',
            raw_url:
              'https://gist.githubusercontent.com/vsouza/2f113fa4b68b8e4a64e77dc50319ee38/raw/f68e3957c74716e8da03dd952f1f9e354397f3ff/start_streamming_spark.py',
            size: 105,
            content:
              'spark_streaming_context.start()\nspark_streaming_context.awaitTermination()\nspark_streaming_context.stop()',
          },
        },
        public: true,
        created_at: '2016-10-05T02:52:20Z',
        updated_at: '2016-10-05T02:52:20Z',
        description: '',
        comments: 0,
        user: null,
        comments_url:
          'https://api.github.com/gists/2f113fa4b68b8e4a64e77dc50319ee38/comments',
        owner: {
          login: 'vsouza',
          id: 484656,
          node_id: 'MDQ6VXNlcjQ4NDY1Ng==',
          avatar_url: 'https://avatars.githubusercontent.com/u/484656?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/vsouza',
          html_url: 'https://github.com/vsouza',
          followers_url: 'https://api.github.com/users/vsouza/followers',
          following_url:
            'https://api.github.com/users/vsouza/following{/other_user}',
          gists_url: 'https://api.github.com/users/vsouza/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/vsouza/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/vsouza/subscriptions',
          organizations_url: 'https://api.github.com/users/vsouza/orgs',
          repos_url: 'https://api.github.com/users/vsouza/repos',
          events_url: 'https://api.github.com/users/vsouza/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/vsouza/received_events',
          type: 'User',
          site_admin: false,
        },
        truncated: false,
      },
    ],
    status: 200,
    statusText: '',
    headers: {
      'cache-control': 'public, max-age=60, s-maxage=60',
      'content-type': 'application/json; charset=utf-8',
      etag: 'W/"0c86524f38a880c9f8ad75d4f17754d37f466f9ed01af883e77fb9deeb0b2a69"',
      'x-github-media-type': 'github.v3',
      'x-ratelimit-limit': '60',
      'x-ratelimit-remaining': '55',
      'x-ratelimit-reset': '1626817203',
      'x-ratelimit-resource': 'core',
      'x-ratelimit-used': '5',
    },
    config: {
      url: 'https://api.github.com/users/vsouza/gists',
      method: 'get',
      headers: {
        Accept: 'application/json, text/plain, */*',
      },
      transformRequest: [null],
      transformResponse: [null],
      timeout: 0,
      xsrfCookieName: 'XSRF-TOKEN',
      xsrfHeaderName: 'X-XSRF-TOKEN',
      maxContentLength: -1,
      maxBodyLength: -1,
    },
    request: {},
  }
}
