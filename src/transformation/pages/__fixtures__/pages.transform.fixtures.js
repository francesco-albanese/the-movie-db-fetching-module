export const data = {
  'sys': {
    'type': 'Array'
  },
  'total': 5,
  'skip': 0,
  'limit': 100,
  'items': [
    {
      'fields': {
        'name': {
          'en-GB': 'NowPlaying'
        },
        'reference': {
          'en-GB': 'now-playing'
        }
      },
      'sys': {
        'id': '6Db4ITQrS0kgCcO2YOycEG'
      }
    },
    {
      'fields': {
        'name': {
          'en-GB': 'Upcoming'
        },
        'reference': {
          'en-GB': 'upcoming'
        }
      },
      'sys': {
        'id': '4C31zqQj84UOYEMSCmuMGq'
      }
    },
    {
      'fields': {
        'name': {
          'en-GB': 'HomePage'
        },
        'reference': {
          'en-GB': 'home-page'
        },
        'sections': {
          'en-GB': [
            {
              'sys': {
                'type': 'Link',
                'linkType': 'Entry',
                'id': '3aetNlbhKMqK4WaQgAYgQY'
              }
            }
          ]
        }
      },
      'sys': {
        'id': 'B7ZAtpRMju2wIkamyqk8C'
      }
    },
    {
      'fields': {
        'name': {
          'en-GB': 'TopRated'
        },
        'reference': {
          'en-GB': 'top-rated'
        }
      },
      'sys': {
        'id': '752DUKAT6gYqCuOwe4U2wK'
      }
    },
    {
      'fields': {
        'name': {
          'en-GB': 'PopularMovies'
        },
        'reference': {
          'en-GB': 'popular'
        }
      },
      'sys': {
        'id': '5cjjxKSyEgEaGIWK8SUAEy'
      }
    }
  ],
  'includes': {
    'Entry': [
      {
        'sys': {
          'space': {
            'sys': {
              'type': 'Link',
              'linkType': 'Space',
              'id': '80351naareny'
            }
          },
          'id': '3aetNlbhKMqK4WaQgAYgQY',
          'type': 'Entry',
          'createdAt': '2018-10-20T11:42:44.990Z',
          'updatedAt': '2018-10-20T11:42:44.990Z',
          'environment': {
            'sys': {
              'id': 'master',
              'type': 'Link',
              'linkType': 'Environment'
            }
          },
          'revision': 1,
          'contentType': {
            'sys': {
              'type': 'Link',
              'linkType': 'ContentType',
              'id': 'section'
            }
          }
        },
        'fields': {
          'name': {
            'en-GB': 'SearchMovies'
          },
          'content': {
            'en-GB': [
              {
                'sys': {
                  'type': 'Link',
                  'linkType': 'Entry',
                  'id': '4UpLMdl2ZG6uYAk8cKoGKi'
                }
              }
            ]
          }
        }
      },
      {
        'sys': {
          'space': {
            'sys': {
              'type': 'Link',
              'linkType': 'Space',
              'id': '80351naareny'
            }
          },
          'id': '4UpLMdl2ZG6uYAk8cKoGKi',
          'type': 'Entry',
          'createdAt': '2018-10-20T11:38:40.311Z',
          'updatedAt': '2018-10-20T11:38:40.311Z',
          'environment': {
            'sys': {
              'id': 'master',
              'type': 'Link',
              'linkType': 'Environment'
            }
          },
          'revision': 1,
          'contentType': {
            'sys': {
              'type': 'Link',
              'linkType': 'ContentType',
              'id': 'text'
            }
          }
        },
        'fields': {
          'name': {
            'en-GB': 'SearchMoviesText'
          },
          'lineOne': {
            'it': 'Cerca Film',
            'en-GB': 'Search Movies'
          }
        }
      }
    ]
  }
}